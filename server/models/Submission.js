const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  language: String,
  code: String,
  output: String,
  error: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Submission", submissionSchema);
