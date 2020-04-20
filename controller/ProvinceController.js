const Province = require('../model/Province');
const District = require('../model/District');

async function getProvince() {
  return await Province.findAll({ include: { model: District, as: 'DISTRICTS' } });
}

module.exports = { getProvince };
