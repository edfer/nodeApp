"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type:String},
    email: {type: String /*, unique: true */},
    messages: [{type: Schema.Types.ObjectId, ref:'User'}]

});

userSchema.statics.info = function(filter, limit, skip, fields, sort, cb) {
    const query = User.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    query.exec(cb);
};

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model('User', userSchema);

//module.exports = User;