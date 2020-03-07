const mongoose = require('mongoose');
const customerSchema = require('./CustomerSchema');
const sneakerSchema = require('./SneakerSchema');

const OrderSchema = new mongoose.Schema({
  customer: customerSchema.schema,
  sneaker: [sneakerSchema.schema],
});

module.exports = mongoose.model('Order', OrderSchema);
