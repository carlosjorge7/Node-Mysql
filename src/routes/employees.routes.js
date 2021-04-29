const express = require('express');
const router = express.Router();

const mysqlConn = require('../database');

router.get('/', (res, req) => {
    req.json({message: 'Welcome to api/company'});
});

// get ALL
router.get('/employees', (req, res) => {
    mysqlConn.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// get ONE
router.get('/employee/:idEmployee', (req, res) => {
    const { idEmployee } = req.params; 
    mysqlConn.query('SELECT * FROM employees WHERE idEmployee = ?', [idEmployee], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

// insert
router.post('/employee', (req, res) => {
    const { idEmployee, name, salary } = req.body;
    console.log(idEmployee, name, salary);
    const query = `
        SET @idEmployee = ?;
        SET @name = ?;
        SET @salary = ?;
        CALL employeeAddOrEdit(@idEmployee, @name, @salary);
    `;
    mysqlConn.query(query, [idEmployee, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Employeed Saved'});
        } else {
            console.log(err);
        }
    });
});

// update
router.put('/employee/:idEmployee', (req, res) => {
    const { idEmployee, name, salary } = req.body;
    console.log(idEmployee, name, salary);
    const query = `
        SET @idEmployee = ?;
        SET @name = ?;
        SET @salary = ?;
        CALL employeeAddOrEdit(@idEmployee, @name, @salary);
    `;
    mysqlConn.query(query, [idEmployee, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Employeed Updated'});
        } else {
            console.log(err);
        }
    });
});

router.delete('/employee/:idEmployee', (req, res) => {
    const { idEmployee } = req.params;
    mysqlConn.query('DELETE FROM employees WHERE idEmployee = ?', [idEmployee], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employee Deleted'});
      } else {
        console.log(err);
      }
    });
})

module.exports = router;