const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
