const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Order = sequelize.define('ORDER', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  TOTAL: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  NOTE: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CREATED_BY: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CREATED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.DataTypes.NOW,
  },
  MODIFIED_BY: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  MODIFIED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  IS_DELETED: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Order;
