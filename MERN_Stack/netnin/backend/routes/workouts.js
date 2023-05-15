const express = require("express");
const {
  createWorkout,
  getWorkout,
  getOneWorkout,
  deleteWorkout,
  editWorkout,
} = require("../controllers/workoutController");

// express router
const router = express.Router();

// api to view all the workout
router.get("/", getWorkout);

// api to view a specific workout
router.get("/:id", getOneWorkout);

// api to create a new workout
router.post("/", createWorkout);

// api to delete a workout
router.delete("/:id", deleteWorkout);

// api to edit the workout
router.patch("/:id", editWorkout);

module.exports = router;
