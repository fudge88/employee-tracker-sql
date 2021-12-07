-- insert into department
INSERT INTO department (name) 
VALUES ('Finance'),
('Human Resources'),
('Operations'),
('Marketing'),
('Sales');

-- insert jobRole
INSERT INTO jobRole (title, salary, departmentId) VALUES 
('Accountant', 42500.00, 1),
('Finance Analyst', 39454.00, 1),
('HR Admin', 23000.00, 2),
('HR Manager', 25531.00, 2),
('Project Manager', 46201.00, 3),
('Operations Engineer', 40351.00, 3),
('Marketing Analyst', 38705.00, 4),
('Brand Manager', 43696.00, 4),
('Sales Executive', 30000.00, 5),
('Sales Manager', 45000.00, 5);


-- insert employee
INSERT INTO employee (firstName, lastName, roleId, managerId) 
VALUES ('Bob', 'Smith', 2, 5),
('Lee', 'Cooper', 2, 5),
('Fatima', 'Gates', 1, 5),
('Jerry', 'Singh', 5, NULL),
('Calvin', 'Klein', 4, 5),
('Debra', 'Norris', 3, 4),
('Saima', 'Smith', 3, 4),
('Tom', 'Jones', 6, 5),
('Karen', 'Rodgers', 7, 8),
('Omar', 'Brown', 6, 5),
('Amy', 'Sandlers', 7, 8),
('Camron', 'Diaz', 8, 5),
('Anne', 'McNeil', 9, 10),
('Tracey', 'Finch', 9, 10),
('Philip', 'Khan', 9, 10),
('Steven', 'Bose', 9, 10),
('Sarah', 'Chesney', 10, 5),
('Amjad', 'Hussein', 1, 5),
('Bill', 'Wong', 2, 5),
('Isha', 'Khan', 4, 5),
('Babatunde', 'Alowaleh', 6, 5);
