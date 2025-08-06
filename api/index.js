const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("../db/connect");
const appointmentRoutes = require("../routes/appointmentRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/appointments", appointmentRoutes);

// Export as serverless function for Vercel
let serverless = require("serverless-http");

// Connect to DB only once
let isConnected = false;
async function connectDBOnce() {
  if (!isConnected) {
    await connectToDatabase();
    isConnected = true;
  }
}

module.exports.handler = async (req, res) => {
  await connectDBOnce();
  return serverless(app)(req, res);
};
