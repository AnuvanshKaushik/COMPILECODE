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

    // Log before saving
    console.log("Creating submission with:", {
      language,
      code,
      output: result.output,
      error: result.error,
    });

    // Save to MongoDB
    const submission = new Submission({
      language,
      code,
      output: result.output,
      error: result.error,
    });

    try {
      await submission.save();
      console.log("✅ Submission saved to DB");
    } catch (err) {
      console.error("❌ Error saving to DB:", err.message);
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Execution error:", error.message);
    res.status(500).json({ error: "Failed to run code." });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ submittedAt: -1 });
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch submissions." });
  }
};

module.exports = {
  runCode,
  getSubmissions,
};
