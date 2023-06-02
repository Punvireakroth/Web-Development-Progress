const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc get all goals
// @route api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json({ goals });
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
  const id = req.params.id;
  const goal = await Goal.findByIdAndRemove(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  res.status(200).json(goal);
});

// export all the controller
module.exports = {
  getGoals,
  createGoals,
  editGoals,
  deleteGoals,
};
