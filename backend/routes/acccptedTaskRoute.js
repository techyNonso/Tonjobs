const { createTask } = require("../controllers/AcceptedTaskController");
const express = require("express");
const router = express.Router();

// games routes
router.route("/").post(createTask);
// favorites routes

module.exports = router;
