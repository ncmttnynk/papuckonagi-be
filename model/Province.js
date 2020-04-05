const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Province = sequelize.define('PROVINCE', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  PLATE: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  UPPER_CITY_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CITY_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  LOWER_CITY_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Province;
