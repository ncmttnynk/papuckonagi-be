const CustomerSchema = require('../model/CustomerSchema');

async function AddCustomer(customer) {
  const data = new CustomerSchema({
    name: customer.name,
    surName: customer.surName,
    phone: customer.phone,
    adress: customer.adress,
    city: customer.city,
  });

  return await data.save().catch(err => {
    return err;
  });
}

module.exports = { AddCustomer };
