"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type:String},
    email: {type: String /*, unique: true */},
    messages: [{type: Schema.Types.ObjectId, ref:'User'}]

});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);