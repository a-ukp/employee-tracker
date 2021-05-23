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
    database: 'employeetracker_db'
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
                'Delete',
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
// view employees
function viewEmployees () {
    connection.query("SELECT id, first_name, last_name, role_id, manager_id FROM employee",
    function(err, res) {
        if (err) throw err
        console.table(res)
        startApp()
    })
};

// view roles
function viewRoles() {
    connection.query("SELECT id, title, salary, department_id FROM roleTable;",
    function(err, res) {
        if (err) throw err
        console.table(res)
        startApp()
    })
};

// view departments
function viewDepartments() {
    connection.query("SELECT id, depName FROM department;",
    function(err, res) {
        if (err) throw err
        console.table(res)
        startApp()
    })
};

// function addEmployee() {
//     inquirer.prompt([
//         {
//             name: "first_name",
//             type: "input",
//             message: "Enter first name:"
//         },
//         {
//             name: "last_name",
//             type: "input",
//             message: "Enter last name:"
//         },
//         {
//             name: "role",
//             type: "list",
//             message: "Select role:",
//             choices: selectRole()
//         },
//         {
//             name: "manager",
//             type: "list",
//             message: "Select manager:",
//             choices: selectManager()
//         },
//     ]).then((val) => {
//         var roleID = selectRole().indexOf(val.role) + 1
//         var managerID = selectManager().indexOf(val.choice) + 1
//         connection.query("INSERT INTO employee SET ?",
//         {
//             first_name: val.first_name,
//             last_name: val.last_name,
//             manager_id: managerID,
//             role_id: roleID
//         }, function(err) {
//             if (err) throw err
//             console.table(val)
//             startApp()
//         })
//     })
// };

// function addDepartment() { 
//     inquirer.prompt([
//         {
//           name: "name",
//           type: "input",
//           message: "What Department would you like to add?"
//         }
//     ]).then(function(res) {
//         var query = connection.query(
//             "INSERT INTO department SET ? ",
//             {
//               name: res.name
            
//             },
//             function(err) {
//                 if (err) throw err
//                 console.table(res);
//                 startPrompt();
//             }
//         )
//     })
//   };
