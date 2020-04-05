const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Customer = sequelize.define('CUSTOMER', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  SURNAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  PHONE: {
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

module.exports = Customer;
