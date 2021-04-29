const mysqlConn = require('../database');

exports.welcomeApi = function(req, res) {
    req.json({message: 'Welcome to api/company'});
};

// ver como se importan en routes