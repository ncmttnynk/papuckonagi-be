const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const OrderDetail = sequelize.define('ORDER_DETAIL', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  QUANTITY: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  SIZE: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderDetail;
