const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

// @desc Register User
// @route api/user/register
// @access public

const registerUser = asyncHandler(async (req, res) => {
  //   const { name, email, password } = req.body;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already existed");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }

  res.status(200).json({ message: "Register User" });
});

// @desc Register User
// @route api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password)))
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.password),
    });
  else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Register User
// @route api/user/login
// @access private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
