
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

    const user = new User(req.body);

    user.save(function(err, userCreated) {
        if (err) {
            //res.json({success: false, error: err});
            next(err);
            return;
        }
        res.render('index', {firstName: userCreated.firstName});

    });

});





module.exports = router;



