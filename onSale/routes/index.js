"use strict";

var express = require('express');
var router = express.Router();
var message = require('../models/message');
var User = require('../models/user');


router.get('/', function (req, res, next) {
  var email = '';
  User.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error!');
    }
    res.render('index', {email: doc.email});
  });
  // next();
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var email = req.body.email;
  var user = new User({
      firstName: 'ed',
      lastName: 'description',
      password: 'http://www.trbimg.com/img-5723672b/turbine/la-trb-gopark-photo-contest-winners-20160428-snap',
      email: email
  });
  user.save();
  res.redirect('/')
});

module.exports = router;
