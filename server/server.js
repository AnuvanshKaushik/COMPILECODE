const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS setup — allow Vercel frontend
const allowedOrigin = 'https://compilecode-gilt.vercel.app';
app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// ✅ Route Imports
const codeRoutes = require("./routes/CodeRoutes");
app.use("/api", codeRoutes);

// ✅ MongoDB Connection
const mongoURI = "mongodb+srv://champanand54:4qzLdUYnCo2kcRFb@cluster0.mutnf6b.mongodb.net/myCompilerDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
