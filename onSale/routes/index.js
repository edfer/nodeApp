"use strict";

var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  console.log('petición get');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
