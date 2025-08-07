const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const {
      clinic,
      service,
      date,
      time,
      name,
      phone,
      message
    } = req.body;

    const newAppointment = new Appointment({
      clinic,
      service,
      date,
      time,
      name,
      phone,
      message
    });

    await newAppointment.save();
    res.status(201).json({ success: true, message: "Appointment saved successfully" });
  } catch (error) {
    console.error("Error saving appointment:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createAppointment };
