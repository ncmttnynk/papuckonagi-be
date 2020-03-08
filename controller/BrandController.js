const Brand = require('../model/Brand');

async function addNewBrand(brand) {
  return await Brand.create({
    TITLE: brand.TITLE,
    CREATED_BY: brand.CREATED_BY,
  });
}

module.exports = { addNewBrand };
