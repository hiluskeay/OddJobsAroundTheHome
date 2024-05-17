const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, date, message } = req.body;
  try {
    const appointment = new Appointment({ name, email, phone, date, message });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
