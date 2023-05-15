const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

// get all workouts
const getWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json({ workouts });
  } catch (e) {
    res.status(400).json({ e: e.message });
  }
};
// get a specific workout
const getOneWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No work out was found!" });
    }
    res.status(200).json({ workout });
  } catch (e) {
    res.status(404).json({ e: "No work out was found!" });
  }
};
// create a workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to Database
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (e) {
    res.status(400).json({ e: e.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).send(`The ${workout.title} as deleted`);
    if (!workout) {
      return res.status(404).json({ error: "There is no such workout" });
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

// edit a workout

const editWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "There is no such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkout,
  getOneWorkout,
  deleteWorkout,
  editWorkout,
};
