const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectToDatabase = require("./db/connect"); // MongoDB connection
const appointmentRoutes = require("./routes/appointmentRoutes"); // Route file

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/appointmentRoutes", appointmentRoutes);

// Start the server only after DB is connected
const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error.message);
  });
