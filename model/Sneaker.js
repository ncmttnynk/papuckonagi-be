const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Sneaker = sequelize.define('SNEAKER', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  TITLE: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  COLOR: {
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
});

module.exports = Sneaker;
