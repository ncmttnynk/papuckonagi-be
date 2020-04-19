const Sneaker = require('../model/Sneaker');
const Brand = require('../model/Brand');

async function addNewSneaker(data) {
  return await Sneaker.create({
    TITLE: data.TITLE,
    COLOR: data.COLOR,
    BRAND_ID: data.BRAND_ID,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateSneaker(data) {
  const TITLE = data.TITLE;
  const COLOR = data.COLOR;
  const BRAND_ID = data.BRAND_ID;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Sneaker.update(
    {
      TITLE,
      COLOR,
      BRAND_ID,
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

async function deleteSneaker(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Sneaker.update(
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

async function getSneakerById(data) {
  const ID = data.ID;
  return await Sneaker.findByPk(ID);
}

async function getSneakerByBrandId(data) {
  const BRAND_ID = data.BRAND_ID;
  return await Sneaker.findAll({ where: { BRAND_ID }, raw: true });
}

async function getSneaker() {
  return await Sneaker.findAll({ include: [Brand], raw: true });
}

module.exports = {
  addNewSneaker,
  updateSneaker,
  deleteSneaker,
  getSneakerById,
  getSneakerByBrandId,
  getSneaker,
};
