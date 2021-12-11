const mysql = require("mysql2");
const cTable = require("console.table");

const { allEmployees, allRoles, allDepartments } = require("./queries");

const displayDepartments = () => {
  db.query(allDepartments, (err, result) => {
    if (err) throw err;
    console.table("All Departments: ", result);
  });
};

const displayEmployees = () => {
  db.query(allEmployees, (err, result) => {
    if (err) throw err;
    console.table("All Employees: ", result);
  });
};

const displayRoles = () => {
  db.query(allRoles, (err, result) => {
    if (err) throw err;
    console.table("All Roles: ", result);
  });
};

const getDepartments = () => {
  // execute mysql query
  // return departments
};

const getRoles = () => {
  // execute mysql query
  // return roles
};

const getEmployees = () => {
  // execute mysql query
  // return employees
};

const constructDepartmentChoices = (departments) => {
  // return an array of department choices
};

const constructRoleChoices = (roles) => {
  // return an array of role choices
};

const constructEmployeeChoices = (roles) => {
  // return an array of employee choices
};

module.exports = {
  displayDepartments,
  displayEmployees,
  displayRoles,
  getDepartments,
  getRoles,
  getEmployees,
  constructDepartmentChoices,
  constructRoleChoices,
  constructEmployeeChoices,
};
