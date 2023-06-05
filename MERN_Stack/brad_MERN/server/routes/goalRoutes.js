const express = require("express");

const router = express.Router();

const {
  getGoals,
  createGoals,
  editGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// Read
router.get("/", protect, getGoals);
// Create
router.post("/", protect, createGoals);

// Edit
router.patch("/:id", protect, editGoals);

// Delete
router.delete("/:id", protect, deleteGoals);

module.exports = router;
