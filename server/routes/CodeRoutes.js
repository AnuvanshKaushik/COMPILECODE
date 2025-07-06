const express = require("express");
const router = express.Router();
const { runCode, getSubmissions } = require("../controllers/codeController");

router.post("/run", runCode);
router.get("/submissions", getSubmissions);

module.exports = router;
