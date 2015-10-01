var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;

var box = new DB({
    host     : 'localhost',
    user     : 'root',
    password : ''
});



var createTest = function(cb) {
    dw.connect(function(conn, cb) {
        cps.seq([
            function(_, cb) {
                User.Table.create(conn, {
                    first_name: 'Hannah',
                    last_name: 'Mckay',
                    gender: 'female'
                    // .... 
                }, cb);
            },
            function(user, cb) {  // user is an object of the class User.Row 
                console.log(user.get('first_name')); // print out 'Hannah' 
                cb();
            }
        ], cb);
    }, cb);
};