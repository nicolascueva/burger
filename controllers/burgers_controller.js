var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerModule = require("../models/burger.js");

//router.get("/")...
//res.render("index"...)



// Export routes for server.js to use.
module.exports = router;
