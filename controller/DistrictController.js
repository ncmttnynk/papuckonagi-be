const District = require('../model/District');

async function getDistrict() {
  return await District.findAll({ raw: true });
}

module.exports = { getDistrict };
