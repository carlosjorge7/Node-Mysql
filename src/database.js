const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db',
    multipleStatements: true
});

mysqlConn.connect(function(err) {
    if(err) {
        console.log('error connection');
    }
    else {
        console.log('>> Database is connected (company_db)');
    }
})

module.exports = mysqlConn;