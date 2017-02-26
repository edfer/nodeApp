
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// const mongoose =require('mongoose');


// GET users listing.
router.get('/', function(req, res, next) {
    User.findOne({}, function (err, docs) {
        if (err) {
            console.log('Error');
            return;
        }

        res.render('index', {firstName: docs.firstName});
    });
});

router.post('/', function(req, res, next) {
    const firstName =req.body.firstName;
    const user = new User({
        firstName: firstName
    });

    user.save();
    res.redirect('/');
});

module.exports = router;



