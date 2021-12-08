const inquirer = require("inquirer");

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
  let inProgress = true;

  while (inProgress) {
    const { chosenAction } = await inquirer.prompt(actionQuestions);

    if (chosenAction === "viewEmployee") {
      console.log("viewEmployee");
      displayEmployees();
    }

    if (chosenAction === "addEmployee") {
      console.log("addEmployee");
    }

    if (chosenAction === "updateEmployeeRole") {
      console.log("updateEmployeeRole");
    }

    if (chosenAction === "viewRoles") {
      displayRoles();
      console.log("viewRoles");
    }

    if (chosenAction === "addRoles") {
      console.log("addRoles");
    }

    if (chosenAction === "viewDepartments") {
      displayDepartments();
      console.log("viewDepartments");
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
