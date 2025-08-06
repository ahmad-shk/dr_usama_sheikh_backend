const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("../db/connect"); // Adjust path as needed
const appointmentRoutes = require("../routes/appointmentRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/appointments", appointmentRoutes);

// Connect to DB before exporting handler
let isConnected = false;
connectToDatabase().then(() => {
  isConnected = true;
}).catch((err) => {
  console.error("DB connection failed:", err);
});

module.exports = async (req, res) => {
  if (!isConnected) {
    await connectToDatabase();
    isConnected = true;
  }
  return serverless(app)(req, res);
};
