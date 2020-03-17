const Brand = require('../model/Brand');

async function addNewBrand(data) {
  return await Brand.create({
    TITLE: data.TITLE,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateBrand(data) {
  const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Brand.update(
    {
      TITLE,
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        ID: data.ID,
      },
    },
  );
}

async function deleteBrand(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Brand.update(
    {
      IS_DELETED: 'true',
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        id: data.ID,
      },
    },
  );
}

async function getBrandById(data) {
  const ID = data.ID;

  return await Brand.findByPk(ID);
}

async function getBrand() {
  return await Brand.findAll({ raw: true });
}

module.exports = { addNewBrand, updateBrand, deleteBrand, getBrandById, getBrand };
