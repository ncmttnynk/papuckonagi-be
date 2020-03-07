const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You should post a customer name!'],
    unique: false,
    index: false,
  },
  surName: {
    type: String,
    required: [true, 'You should post a customer surname!'],
    unique: false,
    index: false,
  },
  phone: {
    type: Number,
    required: [true, 'You should post a customer phone!'],
    unique: false,
    index: false,
  },
  adress: {
    type: Number,
    required: [true, 'You should post a customer adress!'],
    unique: false,
    index: false,
  },
  city: {
    type: Number,
    required: [true, 'You should post a customer city!'],
    unique: false,
    index: false,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
