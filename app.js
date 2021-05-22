// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

// connect to host
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '801151',
    database: 'emplTracker_db'
});

// async connect
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startApp();
});

// initial prompt
function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                'View',
                'Add',
                'Update',
                'Delete'
            ]
        }
    ]).then((val) => {
        switch (val.choice) {
            case 'View':
                viewOptions();
            break;

            case 'Add':
                addOptions();
            break;

            case 'Update':
                updateOptions();
            break;

            case 'Delete':
                deleteOptions();
            break;
        }
    })
};

// initial options
// view options
function viewOptions() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'choice',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'View employees by manager',
                'View the total utilized budget of a department'
            ]
        }
    ]).then((val) => {
        switch (val.choice) {
            case 'View departments':
                viewDepartments();
            break;

            case 'View roles':
                viewRoles();
            break;

            case 'View employees':
                viewEmployees();
            break;

            case 'View employees by manager':
                viewEmployeebyManager();
            break;

            case 'View the total utilized budget of a department':
                viewBudget();
            break;
        }
    })
};

// add options
function addOptions() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'choice',
            choices: [
                'Add department',
                'Add role',
                'Add employee',
            ]
        }
    ]).then((val) => {
        switch (val.choice) {
            case 'Add department':
                addDepartment();
            break;

            case 'Add role':
                addRole();
            break;

            case 'Add employee':
                addEmployee();
            break;
        }
    })
};

// update functions
function updateOptions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'choice',
            choices: [
                'Update employee roles',
                'Update employee managers',
            ]
        }
    ]).then((val) => {
        switch (val.choice) {
            case 'Update employee roles':
                updateEmployeeRoles();
            break;

            case 'Update employee managers':
                upddateEmployeeManagers();
            break;
        }
    })
};

// delete options
function deleteOptions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select an option:',
            name: 'choice',
            choices: [
                'Delete departments',
                'Delete roles',
                'Delete employees'
            ]
        }
    ]).then((val) => {
        switch (val.choice) {
            case 'Delete departments':
                deleteDepartment();
            break;

            case 'Delete roles':
                deleteRoles();
            break;

            case 'Delete employees':
                deleteEmployees();
            break;
        }
    })
};

// begin user functions
// view departments
function viewEmployees () {
    
};
