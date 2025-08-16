const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectToDatabase = require("../db/connect"); // Note the relative path
const appointmentRoutes = require("../routes/appointmentRoutes"); // Assuming routes folder at project root
const queryRoutes = require("../routes/queryRoutes");
const adminRoutes = require("../routes/adminRoutes");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/appointmentRoutes", appointmentRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/admin", adminRoutes);
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
