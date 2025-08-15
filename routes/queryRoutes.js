const express = require("express");
const router = express.Router();
const {
  createQuery,
  getQueries,
  getQueryById,
  updateQuery,
  deleteQuery
} = require("../controllers/queryController");

// CREATE
router.post("/", createQuery);

// GET All
router.get("/", getQueries);

// GET by ID
router.get("/:id", getQueryById);

// UPDATE
router.put("/:id", updateQuery);

// DELETE
router.delete("/:id", deleteQuery);

module.exports = router;
