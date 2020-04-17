const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('ncmttnynk_site_papuckonagi', 'ncmtt_papuc', 'u!f3F50t', {
  host: '94.73.145.192',
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

//const sequelize = new Sequelize('papuckonagi', 'root', '0453', {
//host: 'localhost',

module.exports = sequelize;
