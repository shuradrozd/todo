var mssql = require('mssql');

var config = {
    user: 'test',
    password: 'test',
    server: 'localhost',
    database: 'test',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000
    }
};

var connection = new mssql.ConnectionPool(config);
var pool = connection.connect(function (err) {
    if (err) console.log(err);
  });
module.exports = pool;