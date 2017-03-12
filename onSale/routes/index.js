
const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const mongoose =require('mongoose');
// const User = mongoose.model('User');


// GET users listing.
router.get('/', function(req, res, next) {
    User.findOne({}, function (err, docs) {
        if (err) {
            console.log('Error');
            return;
        }

        res.render('index', {firstName: docs.firstName});
    });
     // res.render('index');
});

router.post('/', function(req, res, next) {

    const user = new User(req.body);

    user.save(function(err, userCreated) {
        if (err) {
            //res.json({success: false, error: err});
            next(err);
            return;
        }
        // res.render('index', {firstName: userCreated.firstName});
        console.log(userCreated);
        return;
    });

});





module.exports = router;



