const allData = `SELECT employee.firstName, employee.lastName, title, salary, name
FROM employee 
LEFT JOIN jobRole 
ON employee.jobRoleId=jobRole.id 
LEFT JOIN department
ON jobRole.departmentId=department.id;`;

const allEmployees = `SELECT employee.id, employee.firstName, employee.lastName
FROM employee`;

const allRoles = `SELECT * FROM jobRole; `;

const allDepartments = `SELECT * FROM departments; `;

module.exports = {
  allEmployees,
  allRoles,
  allDepartments,
};
