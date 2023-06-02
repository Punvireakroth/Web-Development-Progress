const asyncHandler = require("express-async-handler");

// @desc get all goals
// @route api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc create a goal
// @route api/goals
// @access private

const createGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Create Gaols" });
});

//@desc edit a goal
// @route api/goals/:id
// @access private

const editGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit Gaols ${req.params.id}` });
});

//@desc delete a goal
// @route api/goals/:id
// @access private

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Gaols ${req.params.id}` });
});

// export all the controller
module.exports = {
  getGoals,
  createGoals,
  editGoals,
  deleteGoals,
};
