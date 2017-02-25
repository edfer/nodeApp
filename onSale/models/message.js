"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    description: {type:String, required:true},
    imageURL: {type: String},
    price: {type: Number},
    user: {type: Schema.Types.ObjectId, ref:'Message'}
});

module.exports = mongoose.model('Message', schema);