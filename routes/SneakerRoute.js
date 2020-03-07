const express = require('express');
const router = express.Router();
const { GetSneakers, AddNewSneaker } = require('../controller/SneakerController');

router.get('/Sneaker', (req, res, next) => {
  GetSneakers(response => {
    return res.status(200).json({
      result: response,
      isSuccess: true,
      error: '',
      statusCode: 200,
    });
  });
});

router.post('/Sneaker', async (req, res, next) => {
  const result = await AddNewSneaker(req.body);
  if (result._id) {
    return res.status(200).json({
      result,
      isSuccess: true,
      error: '',
      statusCode: 200,
    });
  } else {
    return res.status(400).json({
      result: '',
      isSucess: false,
      error: result,
      statusCode: 400,
    });
  }
});

module.exports = router;
