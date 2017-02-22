"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    description: {type:String, required:true},
    image: {type: String},
    price: {type: Number},
    user: {type: Schema.Types.ObjectId, ref:'Message'}
});

module.exports = mongoose.model('postOnSale', schema);