const inquirer = require("inquirer");

const Db = require("./utils/db");
const actionQuestions = require("./utils/questions");

const generateDepartmentChoices = (departmentsFromDB) => {
  return departmentsFromDB.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });
};

const generateRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((jobRole) => {
    return {
      name: jobRole.name,
      value: jobRole.title,
    };
  });
};

const generateManagerChoices = (managerFromDB) => {
  return managerFromDB.map((employee) => {
    return {
      name: employee.name,
      value: employee.firstName + " " + employee.lastName,
    };
  });
};

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
      const role = await db.query("SELECT * FROM jobRole");
      const employee = await db.query("SELECT * FROM employee");

      const employeeQuestions = [
        {
          type: "input",
          message: "Please enter employee's first name:",
          name: "firstName",
        },
        {
          type: "input",
          message: "Please enter employee's last name:",
          name: "lastName",
        },
        {
          type: "list",
          message: "Please select a role:",
          name: "roleId",
          choices: generateRoleChoices(role),
        },
        {
          type: "list",
          message: "Please select a Manager:",
          name: "managerId",
          choices: generateManagerChoices(employee),
        },
      ];

      const { roleId, firstName, lastName, managerId } = await inquirer.prompt(
        employeeQuestions
      );

      await db.query(
        `INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES("${firstName}", ${lastName}, ${managerId}, ${roleId})`
      );
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
      const departments = await db.query("SELECT * FROM department");

      const roleQuestions = [
        {
          type: "list",
          message: "Please select a department:",
          name: "departmentId",
          choices: generateDepartmentChoices(departments),
        },
        {
          type: "input",
          message: "Please enter role title:",
          name: "title",
        },
        {
          type: "input",
          message: "Please enter role salary:",
          name: "salary",
        },
      ];

      const { departmentId, title, salary } = await inquirer.prompt(
        roleQuestions
      );

      await db.query(
        `INSERT INTO jobRole (title, salary, departmentId) VALUES("${title}", ${salary}, ${departmentId})`
      );
    }

    if (chosenAction === "viewDepartments") {
      const departments = await db.query(
        "SELECT department.id, department.name FROM department"
      );
      console.table(departments);
    }

    if (chosenAction === "addDepartment") {
      const departmentQuestions = [
        {
          type: "input",
          message: "Please enter new department:",
          name: "newDepartment",
        },
      ];

      const { newDepartment } = await inquirer.prompt(departmentQuestions);

      await db.query(
        `INSERT INTO department (name) VALUES("${newDepartment}")`
      );
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
