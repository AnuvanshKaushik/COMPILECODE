const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const codeRoutes = require("./routes/CodeRoutes");
app.use("/api", codeRoutes);

mongoose
  .connect("mongodb+srv://champanand54:4qzLdUYnCo2kcRFb@cluster0.mutnf6b.mongodb.net/myCompilerDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log(`Server running on port ${5000}`)
    );
  })
  .catch((err) => console.error("MongoDB error:", err));
