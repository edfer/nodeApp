"use strict";

const express = require('express');
const router = express.Router();
// const message = require('../../models/Message');
// const User = require('../../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');


router.get('/', function (req, res, next) {

    const firstName = req.query.firstName;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if (firstName) {
        filter.firstName = firstName;
    }

    User.info(filter, limit, skip, fields, sort, function(err, docs) {
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

router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    const user = req.body;
    User.update({_id:id}, user, function(err) {
        if (err) {
            return next(err);
        }
        res.json({success: true});
    })
});

router.delete('/:id', function(req, res, next){
    const id = req.params.id;
    User.remove({_id: id}, function(err){
        if (err) {
            return next(err);
        }
        res.json({success: true});
    });
});

module.exports = router;