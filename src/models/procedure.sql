USE company_db;

DELIMITER $$
USE `company_db`$$

CREATE PROCEDURE `employeeAddOrEdit` (
  IN _idEmployee INT,
  IN _name VARCHAR(45),
  IN _salary INT
)
BEGIN 
  IF _idEmployee = 0 THEN
    INSERT INTO employees (name, salary)
    VALUES (_name, _salary);

    SET _idEmployee = LAST_INSERT_ID();
  ELSE
    UPDATE employees
    SET
    name = _name,
    salary = _salary
    WHERE idEmployee = _idEmployee;
  END IF;

  SELECT _idEmployee AS 'idEmployee';
END