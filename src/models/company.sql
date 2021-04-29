USE company_db;

CREATE TABLE employees (
  idEmployee INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(idEmployee)
);

DESCRIBE employees;

INSERT INTO employees (name, salary) values 
  ('Ryan Ray', 20000),
  ('Joe McMillan', 40000),
  ('John Carter', 50000);

SELECT * FROM employees;