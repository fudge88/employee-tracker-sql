// const mysql = require("mysql2");
const inquirer = require("inquirer");

const actionQuestions = require("./lib/questions");

const displayDepartments = () => {
  // execute mysql query
  `SELECT * FROM department;`;
  // log/table departments
};

const displayRoles = () => {
  // execute mysql query
  // log/table roles
};

const displayEmployees = () => {
  // execute mysql query
  // log/table employees
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
// const connection = {
//   host: process.envDB_HOST || "localhost",
//   user: process.envDB_USER || "root",
//   password: process.envDB_PASSWORD || "Password123",
//   database: process.envDB_NAME || "company_db",
// };

// const db = mysql.createConnection(connection);
// console.log(`Connected to the company_db database.`);

const start = async () => {
  // declare one question with list of actions
  let inProgress = true;

  while (inProgress) {
    const { chosenAction } = await inquirer.prompt(actionQuestions);

    if (chosenAction === "viewEmployee") {
      console.log("viewEmployee");
    }

    if (chosenAction === "addEmployee") {
      console.log("addEmployee");
    }

    if (chosenAction === "updateEmployeeRole") {
      console.log("updateEmployeeRole");
    }

    if (chosenAction === "viewRoles") {
      console.log("viewRoles");
    }

    if (chosenAction === "addRoles") {
      console.log("addRoles");
    }

    if (chosenAction === "viewDepartments") {
      console.log("viewDepartments");
    }

    if (chosenAction === "addDepartment") {
      console.log("addDepartment");
    }

    if (chosenAction === "exit") {
      inProgress = false;
      process.exit(0);
    }
    // prompt question and get answer (action)
    // insert if blocks for all actions
    // if displayDepartments()
    // if displayRoles()
    // if displayEmployees()
    // if ("addDepartment") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
    // }
    // if ("addRole") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
    // }
    // if ("addEmployee") {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    // construct mysql insert query for employee
    // execute mysql query
    // }
  }
};

start();
