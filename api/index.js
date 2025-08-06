const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./db/connect"); // MongoDB connection file
const appointmentRoutes = require("./routes/appointmentRoutes"); // Appointment route file

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/api/appointments", appointmentRoutes); // Use appointment routes

// Start server after DB connection
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("❌ Failed to connect to database:", error);
});
