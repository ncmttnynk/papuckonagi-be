const BrandSchema = require('../model/BrandSchema');
const ObjectId = require('mongodb').ObjectID;

async function AddBrand(brand) {
  const data = new BrandSchema({
    name: brand.name,
    order: brand.order,
    createdBy: brand.createdBy,
    createdDate: brand.createdDate,
    modifiedBy: brand.modifiedBy,
    modifiedDate: brand.modifiedDate,
  });

  return await data.save().catch(err => {
    return err;
  });
}

module.exports = { AddBrand };
