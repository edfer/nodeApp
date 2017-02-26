"use strict";

const express = require('express');
const router = express.Router();
// const message = require('../../models/Message');
const User = require('../../models/User');


router.get('/', function (req, res, next) {

    User.find().exec( function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        res.json({
          success:true,
            data: docs
        });
    });
    // next();
});

/* GET home page. */
router.post('/', function(req, res, next) {
    const user = new User(req.body);
    user.save(function(err, newUser) {
      if (err) {
        next(err);
        return;
      }
      console.log(newUser);
      res.json({
        success: true,
          data: newUser
      });
    });
});

module.exports = router;