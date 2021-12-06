# employee-tracker-sql

a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL

// INQUIRER

// view
// - all departments -> display departments and ids
// - all roles -> role title, role id, department and salary (join departments and role tables)
// - all employees -> employee id, first name last name, role, department, salary, and manager (join departments and role tables) has foreign key linked to self in employee table

// add
// - add departments -> prompt department question & store in table.
// - add role -> get all departments -select department- add role and ask salary etc & store in table.
// - add employee -> get all roles -select role- ask name etc get all employees, choose manager.

// update
// - update employee -> get all employees -select employee- get all roles prompt role to update - get all managers prompt manager to update.
