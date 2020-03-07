const SneakerSchema = require('../model/SneakerSchema');
const ObjectId = require('mongodb').ObjectID;

function GetSneakers(callBack) {
  SneakerSchema.find((err, res) => {
    if (err) return err;
    callBack(res);
  });
}

async function AddNewSneaker(sneaker) {
  const data = new SneakerSchema({
    model: sneaker.model,
  });
  return await data.save().catch(err => {
    return err;
  });
}

module.exports = { GetSneakers, AddNewSneaker };
