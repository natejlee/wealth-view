var db = require('mysql');

var connection = db.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: ''
});

connection.connect(function(err){
  if(err){
    console.error('An error occured', err);
   }
  else {
     console.log('Connected successfully');
  }
});

module.exports = connection;