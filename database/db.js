const Sequelize = require('sequelize');

const sequelize = new Sequelize('papuckonagi', 'root', '0453', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: {
    useUTC: false, //for reading from database
  },
  timezone: '+03:00',
});

module.exports = sequelize;
