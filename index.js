const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connection to SQL database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jacob113322",
    database: "employeeTracker_db"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt();
});

// Function to start question prompt + switch statements
const startPrompt = () => {
    return inquirer.prompt([{
        name: 'database',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View All Departments?", "View All Roles?", "View All Employees?", "Add Department?", "Add Role?", "Add Employee?", "Update Employee Role?"]
    }]).then(function(val) {
        switch (val.choice) {
            case "View All Departments":
                viewAllDepartments();
                break;

            case "View All Roles?":
                viewAllRoles();
                break;

            case "View All Employees?":
                viewAllEmployees();
                break;

            case "Add Department?":
                addDepartment();
                break;

            case "Add Role?":
                addRole();
                break;

            case "Add Employee?":
                addEmployee();
                break;

            case "Update Employee Role?":
                updateEmployee();
                break;
        }
    })
};

// View all departments
const viewAllDepartments = () => {
    connection.query("",
        function(err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        })
};

// View all roles
const viewAllRoles = () => {
    connection.query("",
        function(err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        })
};

const viewAllEmployees = () => {
    connection.query("",
        function(err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        })
};