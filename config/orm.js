// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (a, b) {

    },
    updateOne: function (c, d) {

    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
