const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("../db/connect"); // change path: one level up
const appointmentRoutes = require("../routes/appointmentRoutes"); // change path: one level up

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/appointments", appointmentRoutes);

// Vercel expects a handler function, not a server start
let isConnected = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    await connectToDatabase();
    isConnected = true;
  }
  return app(req, res); // pass the request to express app
};
