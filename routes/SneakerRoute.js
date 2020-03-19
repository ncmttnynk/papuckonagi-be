const express = require('express');
const router = express.Router();
const {
  addNewSneaker,
  updateSneaker,
  deleteSneaker,
  getSneakerById,
  getSneakerByBrandId,
  getSneaker,
} = require('../controller/SneakerController');

router.post('/Sneaker', (req, res, next) => {
  addNewSneaker(req.body)
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

router.put('/Sneaker', (req, res, next) => {
  updateSneaker(req.body)
    .then(result => {
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
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.delete('/Sneaker/:ID/:MODIFIED_BY', (req, res, next) => {
  deleteSneaker(req.params)
    .then(result => {
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
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.get('/Sneaker/Brand/:BRANDID', (req, res, next) => {
  getSneakerByBrandId(req.params)
    .then(result => {
      if (result !== null)
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
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.get('/Sneaker/:ID', (req, res, next) => {
  getSneakerById(req.params)
    .then(result => {
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
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

router.get('/Sneaker', (req, res, next) => {
  getSneaker()
    .then(result => {
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
    .catch(err => {
      return res.status(400).json({
        result: '',
        isSuccess: false,
        error: err,
        statusCode: 400,
      });
    });
});

module.exports = router;
