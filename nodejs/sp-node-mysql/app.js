var mysql = require("mysql");
var db = require('node-mysql');
var http = require('http');
var DB = db.DB;
// First you need to create a connection to the db
var con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'phpmyadmin'
});


con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
  console.log('MySQL Connection details  '+ con);

con.query('SELECT COUNT(*) FROM pma_bookmark');



http.createServer(function (request, response) 
{ 
        console.log('Creating the http server');
        con.query('SELECT * FROM pma_bookmark',  function(err, rows, fields)
        {
                console.log('Connection result error '+err);
             //   console.log('no of records is '+rows[0]);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.end(JSON.stringify(rows));
               response.end();
        }); 

}).listen(8085);



/*


con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
  




*/


