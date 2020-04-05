const Customer = require('../model/Customer');

async function addNewCustomer(data) {
  return await Customer.create({
    NAME: data.NAME,
    SURNAME: data.SURNAME,
    PHONE: data.PHONE,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateCustomer(data) {
  const NAME = data.NAME;
  const SURNAME = data.SURNAME;
  const PHONE = data.PHONE;
  const IS_DELETED = data.IS_DELETED;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Customer.update(
    {
      NAME,
      SURNAME,
      PHONE,
      MODIFIED_BY,
      MODIFIED_DATE,
      IS_DELETED,
    },
    {
      where: {
        ID: data.ID,
      },
    },
  );
}

async function deleteCustomer(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Customer.update(
    {
      IS_DELETED: 'true',
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        id: data.ID,
      },
    },
  );
}

async function getCustomerById(data) {
  const ID = data.ID;
  return await Customer.findByPk(ID);
}

async function getCustomer() {
  return await Customer.findAll({ raw: true });
}

module.exports = {
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomer,
};
