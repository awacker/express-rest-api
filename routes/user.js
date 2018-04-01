const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res, next) =>
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json(users);
  })
);

router.get('/:id', (req, res, next) =>
  User.findOne({_id: req.params.id}, (err, user) => {
    if (err) return next(err);
    res.json(user);
  })
);

module.exports = router;
