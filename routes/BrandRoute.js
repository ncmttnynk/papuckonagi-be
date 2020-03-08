const express = require('express');
const router = express.Router();
const { addNewBrand } = require('../controller/BrandController');

router.post('/Brand', (req, res, next) => {
  addNewBrand(req.body)
    .then(result => {
      return res.status(200).json({
        result,
        isSuccess: true,
        error: '',
        statusCode: 200,
      });
    })
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err.errors,
        statusCode: 400,
      });
    });
});

module.exports = router;
