var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerModule = require("../models/burger.js");

router.get("/", function (req, res) {
    burgerModule.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



// Export routes for server.js to use.
module.exports = router;
