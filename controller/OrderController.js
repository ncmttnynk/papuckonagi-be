const Order = require('../model/Order');
const OrderDetail = require('../model/OrderDetail');
const Customer = require('../model/Customer');

const { addNewCustomer } = require('../controller/CustomerController');

async function addNewOrder(data) {
  const customer = await addNewCustomer(data.CUSTOMER);
  const order = await addOrder(data, customer.dataValues.ID);
  data.ORDER_DETAIL.forEach((value) => {
    value.ORDER_ID = order.dataValues.ID;
  });
  await OrderDetail.bulkCreate(data.ORDER_DETAIL);
  return order;
}

async function addOrder(data, customerId) {
  return await Order.create({
    TOTAL: data.TOTAL,
    NOTE: data.NOTE,
    PROVINCE_ID: data.PROVINCE_ID,
    DISTRICT_ID: data.DISTRICT_ID,
    CUSTOMER_ID: customerId,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateOrder(data) {
  const customerId = data.CUSTOMER.ID;
  const NAME = data.CUSTOMER.NAME;
  const SURNAME = data.CUSTOMER.SURNAME;
  const PHONE = data.CUSTOMER.PHONE;
  const MODIFIED_BY = data.CUSTOMER.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  console.log(customerId);
  await Customer.update(
    {
      NAME,
      SURNAME,
      PHONE,
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        id: customerId,
      },
    },
  );
  console.log(data.ORDER_DETAIL);
  data.ORDER_DETAIL.forEach(async (detailData) => {
    console.log(detailData);
    const orderDetailId = detailData.ID;
    const QUANTITYY = detailData.QUANTITY;
    const SIZEE = detailData.SIZE;
    const SNEAKER_IDD = detailData.SNEAKER_ID;
    const IS_DELETEDD = data.CUSTOMER.IS_DELETED;
    const MODIFIED_BYY = data.CUSTOMER.MODIFIED_BY;
    const MODIFIED_DATEE = Date.now();

    await OrderDetail.update(
      {
        QUANTITY: QUANTITYY,
        SIZE: SIZEE,
        SNEAKER_ID: SNEAKER_IDD,
        IS_DELETED: IS_DELETEDD,
        MODIFIED_BY: MODIFIED_BYY,
        MODIFIED_DATE: MODIFIED_DATEE,
      },
      {
        where: {
          id: orderDetailId,
        },
      },
    );
  });

  const TOTALLL = data.TOTAL;
  const NOTEEE = data.NOTE;
  const DISTRICT_IDDD = data.DISTRICT_ID;
  const PROVINCE_IDDD = data.PROVINCE_ID;
  const MODIFIED_BYYY = data.MODIFIED_BY;
  const MODIFIED_DATEEE = Date.now();

  return await Order.update(
    {
      TOTAL: TOTALLL,
      NOTE: NOTEEE,
      DISTRICT_ID: DISTRICT_IDDD,
      PROVINCE_ID: PROVINCE_IDDD,
      MODIFIED_BY: MODIFIED_BYYY,
      MODIFIED_DATE: MODIFIED_DATEEE,
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
