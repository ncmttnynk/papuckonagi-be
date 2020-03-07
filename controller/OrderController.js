const OrderSchema = require('../model/OrderSchema');

async function AddOrder(order) {
  const data = new OrderSchema({
    name: brand.name,
    order: brand.order,
    createdBy: brand.createdBy,
    createdDate: brand.createdDate,
    modifiedBy: brand.modifiedBy,
    modifiedDate: brand.modifiedDate,
  });

  return await data.save().catch(err => {
    return err;
  });
}

module.exports = { AddBrand };
