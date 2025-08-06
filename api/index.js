// api/index.js (Final Version for Vercel)
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("../db/connect"); // Note the correct path

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appointmentRoutes = require("../routes/appointmentRoutes");
app.use("/api/appointments", appointmentRoutes);

// Connect to DB once and export app
connectToDatabase();

module.exports = app;
