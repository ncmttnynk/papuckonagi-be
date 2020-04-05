const Order = require('../model/Order');
const Customer = require('../model/Customer');

const { addNewCustomer } = require('../controller/CustomerController');

async function addNewOrder(data) {
  addNewCustomer(data.Customer).then((customer) => {
    console.log(customer);
  });

  return await Order.create({
    TOTAL: data.TOTAL,
    NOTE: data.NOTE,
    PROVINCE_ID: data.PROVINCE_ID,
    DISTRICT_ID: data.DISTRICT_ID,
    CUSTOMER_ID: data.CUSTOMER_ID,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateOrder(data) {
  const TOTAL = data.TOTAL;
  const NOTE = data.NOTE;
  const DISTRICT_ID = data.DISTRICT_ID;
  const PROVINCE_ID = data.PROVINCE_ID;
  const CUSTOMER_ID = data.CUSTOMER_ID;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Order.update(
    {
      TOTAL,
      NOTE,
      DISTRICT_ID,
      PROVINCE_ID,
      CUSTOMER_ID,
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        ID: data.ID,
      },
    },
  );
}

async function deleteOrder(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Order.update(
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

async function getOrderById(data) {
  const ID = data.ID;

  return await Order.findByPk(ID);
}

async function getOrder() {
  return await Order.findAll({ include: [Customer], raw: true });
}

module.exports = { addNewOrder, updateOrder, deleteOrder, getOrderById, getOrder };
