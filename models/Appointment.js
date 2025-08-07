const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clinic: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
