const inquirer = require("inquirer");
const Db = require("./utils/db");

const {
  displayDepartments,
  displayEmployees,
  displayRoles,
  getDepartments,
  getRoles,
  getEmployees,
  constructDepartmentChoices,
  constructRoleChoices,
  constructEmployeeChoices,
} = require("./utils/actions");

const actionQuestions = require("./utils/questions");

const start = async () => {
  const db = new Db({
    host: process.envDB_HOST || "localhost",
    user: process.envDB_USER || "root",
    password: process.envDB_PASSWORD || "Password123",
    database: process.envDB_NAME || "company_db",
  });

  await db.start();

  let inProgress = true;

  while (inProgress) {
    const { chosenAction } = await inquirer.prompt(actionQuestions);

    if (chosenAction === "viewEmployee") {
      const employees = await db.query(
        "SELECT employee.id, employee.firstName, employee.lastName FROM employee"
      );
      console.table(employees);
    }

    if (chosenAction === "addEmployee") {
      console.log("addEmployee");
    }

    if (chosenAction === "updateEmployeeRole") {
      console.log("updateEmployeeRole");
    }

    if (chosenAction === "viewRoles") {
      const roles = await db.query(
        "SELECT jobRole.id, jobRole.title, jobRole.salary FROM jobRole"
      );
      console.table(roles);
    }

    if (chosenAction === "addRoles") {
      console.log("addRoles");
    }

    if (chosenAction === "viewDepartments") {
      const departments = await db.query(
        "SELECT department.id, department.name FROM department"
      );
      console.table(departments);
    }

    if (chosenAction === "addDepartment") {
      console.log("addDepartment");
    }

    if (chosenAction === "exit") {
      inProgress = false;
      process.exit(0);
    }

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
