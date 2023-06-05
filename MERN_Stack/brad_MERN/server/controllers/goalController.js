const asyncHandler = require("express-async-handler");

// Models
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc get all goals
// @route api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc create a goal
// @route api/goals
// @access private

const createGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

//@desc edit a goal
// @route api/goals/:id
// @access private

const editGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = User.findById(req.user.id);
  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }

  // make sure one user cannot update another user goal
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const updateGoal = await Goal.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body }
  );
  res.status(200).json(updateGoal);
});

//@desc delete a goal
// @route api/goals/:id
// @access private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }

  // make sure one user cannot delete another user goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const deletegoal = await goal.remove();

  res.status(200).json(deletegoal);
});

// export all the controller
module.exports = {
  getGoals,
  createGoals,
  editGoals,
  deleteGoals,
};
