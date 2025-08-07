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

app.use("/api/appointmentRoutes", appointmentRoutes);

const PORT = process.env.PORT || 5000;

// Connect to DB first, then start server
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error.message);
  });
