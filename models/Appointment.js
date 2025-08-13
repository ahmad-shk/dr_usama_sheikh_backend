const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clinic: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: false }, // 💰 Amount field
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "completed", "cancelled"], // Status options
    default: "pending" 
  }
}, {
  timestamps: true
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
