# Employee Tracker ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

![portfolio demo](./assets/img/)

## Summary

An interface that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS).

This app was created for a business to keep track of its employees, the user is able to add update and delete as required with controlled commands and prompts. The use of `tables` ensured that the data was displayed in a readable manner.

#### A walk-though video for the app can be viewed [here.](https://drive.google.com/drive/folders/1Z3-xUghfRkOGizXHfOQO7X6_CAET0kaY?usp=sharing)

![portfolio demo](./assets/img/questions.gif)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation Instructions:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/employee-tracker-sql) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:fudge88/employee-tracker-sql.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install --save
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file

```
"start": node src/index.js
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm run start
```

This should start the application, and you will be prompted with questions in the terminal.

![portfolio demo](./assets/img/inquierer.png)

## Tools Used:

- node.js
- inquirer - npm
- mysql2
- console.table - npm

#### Languages:

- JavaScript

#### MySQL:

MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.

The most common use for mySQL however, is for the purpose of a web database. It can be used to store anything from a single record of information to an entire inventory of available products for an online store.

### References

[NPM Table](https://www.npmjs.com/package/console.table)

[StackOverflow](https://stackoverflow.com/questions/)

[NPM Inquirer](https://www.npmjs.com/package/inquirer)

[MySQL](https://www.npmjs.com/package/mysql2)

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

- If you have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com
