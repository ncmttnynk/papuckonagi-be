const express = require('express');
const router = express.Router();
const {
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
  getCustomer,
} = require('../controller/CustomerController');

router.post('/Customer', (req, res, next) => {
  addNewCustomer(req.body)
    .then((result) => {
      return res.status(200).json({
        result,
        isSuccess: true,
        error: '',
        statusCode: 200,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err.errors,
        statusCode: 400,
      });
    });
});

router.put('/Customer', (req, res, next) => {
  updateCustomer(req.body)
    .then((result) => {
      if (result[0] > 0)
        return res.status(200).json({
          result,
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

router.delete('/Customer/:ID/:MODIFIED_BY', (req, res, next) => {
  deleteCustomer(req.params)
    .then((result) => {
      if (result[0] > 0)
        return res.status(200).json({
          result,
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

router.get('/Customer/:ID', (req, res, next) => {
  getCustomerById(req.params)
    .then((result) => {
      console.log(result.dataValues);
      if (result !== null)
        return res.status(200).json({
          result: result.dataValues,
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

router.get('/Customer', (req, res, next) => {
  getCustomer()
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
