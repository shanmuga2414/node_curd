const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  username: String,
  address: String,
  position: String,
  salary: Number,
  update_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Employee', EmployeeSchema);
