// dependencies
var mongoose = require('mongoose');
var express = require("express");
var Notes = require('../models/notes.js');
var Articles = require('../models/posts.js');

// database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
var db = mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

function getLastArticles(number, cb){
	Articles.find({})
	.populate('notesList')
	.sort({'date': -1})
	.limit(10)
	.exec(function(err, data){
		cb(data);
	});
};

module.exports = {
	db: db,
	Articles: Articles,
	Notes: Notes,
	getLastArticles: getLastArticles
};