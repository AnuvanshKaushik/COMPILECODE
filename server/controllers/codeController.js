const axios = require("axios");
const Submission = require("../models/Submission");

const runCode = async (req, res) => {
  const { language, code } = req.body;

  try {
    const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
      language,
      version: "*",
      files: [{ name: "main", content: code }],
    });

    const result = {
      output: response.data.run.output || "",
      error: response.data.run.stderr || "",
    };

    // Save to MongoDB
    const submission = new Submission({
      language,
      code,
      output: result.output,
      error: result.error,
    });
    await submission.save();

    res.status(200).json(result);
  } catch (error) {
    console.error("Execution error:", error);
    res.status(500).json({ error: "Failed to run code." });
  }
};

const getSubmissions = async (req, res) => {
  const submissions = await Submission.find().sort({ submittedAt: -1 });
  res.status(200).json(submissions);
};

module.exports = {
  runCode,
  getSubmissions,
};
