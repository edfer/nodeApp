"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;

mongoose.Promise = global.Promise;

conn.on('error', function (err) {
  console.log(err);
});

conn.once('open', function () {
  console.log('connected to mongodb');
});

mongoose.connect('mongodb://localhost:27017/on-sale');