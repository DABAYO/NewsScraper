const express = require("express");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require("request");
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./routes");
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
app.use(routes);
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI); 
app.listen(port, function() {
 console.log("app is listening on...", port);
});

express

express-handlebars

mongoose

body-parser

cheerio

request