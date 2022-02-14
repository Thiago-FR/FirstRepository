const express = require('express');
const axios = require('axios');
const ValidatedToken = require('../validated/ValidatedToken');

const router = express.Router();

router.use(ValidatedToken);

router.get('/price', async (_req, res) => {
  const btc = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json);');
  res.status(200).json(btc.data);
});

module.exports = router;