const OrderSchema = require('../model/OrderSchema');

async function AddOrder(order) {
  const data = new OrderSchema({
    customer: order.customer,
    sneaker: order.snekar,
  });

  return await data.save().catch(err => {
    return err;
  });
}

module.exports = { AddOrder };
