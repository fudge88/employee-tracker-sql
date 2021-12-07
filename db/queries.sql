USE company_db;

-- view all departments
SELECT * FROM department;

-- view all roles
SELECT jobRole.id, jobRole.title, jobRole.salary, department.name FROM jobRole JOIN department ON jobRole.departmentId = department.id ORDER BY department.name;

-- view all employees
SELECT employee_role.firstName, employee_role.lastName, title, salary, name
FROM employee employee_role 
LEFT JOIN jobRole 
ON employee_role.jobRoleId=jobRole.id 
LEFT JOIN department
ON jobRole.departmentId=department.id;

