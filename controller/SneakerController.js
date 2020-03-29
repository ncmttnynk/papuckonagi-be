const Sneaker = require('../model/Sneaker');

async function addNewSneaker(data) {
  return await Sneaker.create({
    TITLE: data.TITLE,
    COLOR: data.COLOR,
    BRANDID: data.BRANDID,
    CREATED_BY: data.CREATED_BY,
  });
}

async function updateSneaker(data) {
  const TITLE = data.TITLE;
  const COLOR = data.COLOR;
  const BRANDID = data.BRANDID;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Sneaker.update(
    {
      TITLE,
      COLOR,
      BRANDID,
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        ID: data.ID,
      },
    }
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
    }
  );
}

async function getSneakerById(data) {
  const ID = data.ID;
  return await Sneaker.findByPk(ID);
}

async function getSneakerByBrandId(data) {
  const BRANDID = data.BRANDID;
  return await Sneaker.findAll({ where: { BRANDID }, raw: true });
}

async function getSneaker() {
  return await Sneaker.findAll({ raw: true });
}

module.exports = {
  addNewSneaker,
  updateSneaker,
  deleteSneaker,
  getSneakerById,
  getSneakerByBrandId,
  getSneaker,
};
