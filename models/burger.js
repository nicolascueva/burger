
// * Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerModule = {
    selectAll: function (cb) {
        orm.selectAll("databaseInput", function (res) {
            cb(res);
        });
    },
    insertOne: function (cb) {
        orm.insertOne("databaseInput", function (res) {
            cb(res);
        });
    },
    updateOne: function (cb) {
        orm.updateOne("databaseInput", function (res) {
            cb(res);
        });
    },
};



// Export the database functions for the controller (catsController.js).
module.exports = burgerModule;