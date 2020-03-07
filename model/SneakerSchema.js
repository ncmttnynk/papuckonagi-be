const mongoose = require('mongoose');
const commonSchema = require('./CommonSchema');
const brandSchema = require('./BrandSchema');

const SneakerSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, 'You should post a sneaker model!'],
    unique: false,
    index: false,
  },
  brand: brandSchema.schema,
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
    default: true,
  },
});

module.exports = mongoose.model('Sneaker', SneakerSchema);
