const express = require("express");

const router = express.Router();

const {
  getGoals,
  createGoals,
  editGoals,
  deleteGoals,
} = require("../controllers/goalController");

// Read
router.get("/", getGoals);
// Create
router.post("/", createGoals);

// Edit
router.patch("/:id", editGoals);

// Delete
router.delete("/:id", deleteGoals);

module.exports = router;
