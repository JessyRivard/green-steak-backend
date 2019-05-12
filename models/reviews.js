"use strict";
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var reviewSchema = new Schema({
  identifier: mongoose.Schema.Types.ObjectId,
  comment: String,
  user: mongoose.Schema.Types.ObjectId,
  value: Number,
  quality: Number,
  meta: {
    timestamp: Date
  }
});

var Reviews = mongoose.model("review", reviewSchema);

module.exports = Reviews