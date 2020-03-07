const mongoose = require('mongoose');

const CommonSchema = new mongoose.Schema({
  createdBy: {
    type: String,
    required: true,
    unique: false,
    index: false,
  },
  createdDate: {
    type: Date,
    required: false,
    unique: false,
    index: false,
    default: Date.Now,
  },
  modifiedBy: {
    type: String,
    required: true,
    unique: false,
    index: false,
  },
  modifiedDate: {
    type: Date,
    required: false,
    unique: false,
    index: false,
    default: Date.Now,
  },
});

module.exports = mongoose.model('Common', CommonSchema);
