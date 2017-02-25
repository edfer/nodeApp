"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type:String},
    email: {type: String, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref:'User'}]

});

module.exports = mongoose.model('User', schema);