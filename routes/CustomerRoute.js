const express = require('express');
const router = express.Router();
const { AddOrder } = require('../controller/CustomerController');

router.post('/Brand', async (req, res, next) => {
  const result = await AddOrder(req.body);
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
