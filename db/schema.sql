DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE jobRole (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2),
  departmentId INT,
  FOREIGN KEY (departmentId)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  jobRoleId INT,
  FOREIGN KEY (jobRoleId)
  REFERENCES jobRole(id)
  ON DELETE SET NULL,
  employeeId INT,
  FOREIGN KEY (employeeId)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
