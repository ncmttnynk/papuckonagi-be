const express = require('express');
const router = express.Router();
const { getProvince } = require('../controller/ProvinceController');

router.get('/province', (req, res, next) => {
  getProvince()
    .then((result) => {
      if (result !== null)
        return res.status(200).json({
          result: result,
          isSuccess: true,
          error: '',
          statusCode: 200,
        });
      else
        return res.status(200).json({
          result: '',
          isSuccess: true,
          error: '',
          statusCode: 204,
        });
    })
    .catch((err) => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

module.exports = router;
