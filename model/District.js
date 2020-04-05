const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const District = sequelize.define('DISTRICT', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  UPPER_DISTRICT_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DISTRICT_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  LOWER_DISTRICT_NAME: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = District;
