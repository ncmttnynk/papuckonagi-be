const express = require('express');
const router = express.Router();

let lamb = false;

router.post('/Lamb', (req, res, next) => {
  lamb = !lamb;
  res.status(200).json({ lamb });
});

router.get('/Lamb', (req, res, next) => {
  res.status(200).json({ lamb });
});

module.exports = router;
