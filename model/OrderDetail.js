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
  CREATED_BY: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CREATED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Date.now,
  },
  MODIFIED_BY: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  MODIFIED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Date.now,
  },
  IS_DELETED: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = OrderDetail;
