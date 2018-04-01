const express = require('express');
const Country = require('../models/country');
const router = express.Router();

router.get('/', (req, res, next) =>
  Country.find({}, (err, countries) => {
    if (err) return next(err);
    res.json(countries);
  })
);

router.get('/:id', (req, res, next) =>
  Country.findOne({_id: req.params.id}, (err, country) => {
    if (err) return next(err);
    res.json(country);
  })
);

module.exports = router;
