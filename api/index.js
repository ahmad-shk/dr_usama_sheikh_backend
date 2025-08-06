const express = require("express");
const app = express();
const appointmentRoutes = require("../appointmentRoutes");

// Middleware to parse JSON
app.use(express.json());

// Mount your appointment routes under /api
app.use("/api", appointmentRoutes);

// Export the app — DO NOT call app.listen() in Vercel
module.exports = app;
