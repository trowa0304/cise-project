const mysql = require("mysql");

var pool = mysql.createPool({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bc86c61b9de610',
    password: 'a51df9e1',
    database: 'heroku_1411e1607a8dfbc'
});

module.export = pool;