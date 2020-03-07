const mongoose = require('mongoose');
const moment = require('moment');
const sneakerSchema = require('./SneakerSchema');

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You should post a brand name!'],
    unique: false,
    index: false,
  },
  order: {
    type: Number,
    default: 1000,
    required: false,
    unique: false,
    index: false,
  },
  createdBy: {
    type: String,
    required: true,
    unique: false,
    index: false,
  },
  createdDate: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
  modifiedBy: {
    type: String,
    required: false,
    unique: false,
    index: false,
  },
  modifiedDate: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
  isDeleted: {
    type: Boolean,
    required: false,
    unique: false,
    index: false,
    default: false,
  },
  models: [sneakerSchema.schema],
});

module.exports = mongoose.model('Brand', BrandSchema);
