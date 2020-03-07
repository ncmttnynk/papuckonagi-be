const brandSchema = require('../model/BrandSchema');
const ObjectId = require('mongodb').ObjectID;

// function GetSneakers(callBack) {
//   SneakerSchema.find((err, res) => {
//     if (err) return err;
//     callBack(res);
//   });
// }

async function AddNewSneaker(sneaker) {
  const data = await brandSchema.findOne({ _id: ObjectId(sneaker.brandId) });
  if (data === undefined) {
    return null;
  }
  data.models = [...data.models, sneaker.sneaker];
  const result = data.updateOne(data);
  return result;
}

module.exports = { AddNewSneaker };
