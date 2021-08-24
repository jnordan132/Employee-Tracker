const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to SQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jacob113322",
    database: "employeeTracker_db"
});

db.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + db.threadId)
    startPrompt();
});

// startPrompt function that starts question prompt + switch statements
const startPrompt = () => {
    return inquirer.prompt([{
        name: 'database',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["View All Departments?", "View All Roles?", "View All Employees?", "Add Department?", "Add Role?", "Add Employee?", "Update Employee Role?"]
    }]).then(function(val) {
        switch (val.choice) {
            case "View All Departments?":
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

// viewAllDepartments function
const viewAllDepartments = () => {
    db.query("SELECT * FROM department", function(err, res) {
        console.log(res)
    })
};

// viewAllRoles function
const viewAllRoles = () => {
    db.query("SELECT * FROM role",
        function(err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        })
};

// viewAllEmployees function
const viewAllEmployees = () => {
    db.query("SELECT * FROM employee",
        function(err, res) {
            if (err) throw err
            console.table(res)
            startPrompt()
        })
};

// addDepartment function
const addDepartment = () => {
    inquirer.prompt([{
        name: "addDepartment",
        type: "input",
        message: "What department would you like to add?"
    }]).then(function(res) {
        const query = connection.query(
            "", {
                name: res.name
            },
            function(err) {
                if (err) throw err
                console.table(res);
                startPrompt();
            }
        )
    })
};

// selectRole function used in add/update employee prompt 
let roleArr = [];
const selectRole = () => {
    db.query("", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            roleArr.push(res[i].title);
        }
    })
    return roleArr;
};

// selectManager function for addEmployee prompt
let managersArr = [];
const selectManager = () => {
    db.query("", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            managersArr.push(res[i].first_name);
        }
    })
    return managersArr;
};

// addEmployee function
const addEmployee = () => {
    inquirer.prompt([{
            name: "firstname",
            type: "input",
            message: "Enter employee first name "
        },
        {
            name: "lastname",
            type: "input",
            message: "Enter employee last name "
        },
        {
            name: "role",
            type: "list",
            message: "What is this employees role? ",
            choices: selectRole()
        },
        {
            name: "choice",
            type: "list",
            message: "Who is this employees manager?",
            choices: selectManager()
        }
    ]).then(function(val) {
        const roleId = selectRole().indexOf(val.role) + 1;
        const managerId = selectManager().indexOf(val.choice) + 1;
        connection.query("", {
            first_name: val.firstName,
            last_name: val.lastName,
            manager_id: managerId,
            role_id: roleId
        }, function(err) {
            if (err) throw err
            console.table(val)
            startPrompt()
        })
    })
};

// updateEmployee function
const updateEmployee = () => {
    db.query("", function(err, res) {
        if (err) throw err
        console.log(res)
        inquirer.prompt([{
                name: "lastName",
                type: "rawlist",
                choices: function() {
                    let lastName = [];
                    for (var i = 0; i < res.length; i++) {
                        lastName.push(res[i].last_name);
                    }
                    return lastName;
                },
                message: "What is the Employee's last name? ",
            },
            {
                name: "role",
                type: "rawlist",
                message: "What is the Employees new title? ",
                choices: selectRole()
            },
        ]).then(function(val) {
            const roleId = selectRole().indexOf(val.role) + 1;
            db.query("", {
                    last_name: val.lastName

                }, {
                    role_id: roleId

                },
                function(err) {
                    if (err) throw err
                    console.table(val)
                    startPrompt()
                })
        });
    });
};

// addRole function
const addRole = () => {
    db.query("", function(err, res) {
        inquirer.prompt([{
                name: "Title",
                type: "input",
                message: "What is the roles Title?"
            },
            {
                name: "Salary",
                type: "input",
                message: "What is the Salary?"
            }
        ]).then(function(res) {
            db.query(
                "", {
                    title: res.Title,
                    salary: res.Salary,
                },
                function(err) {
                    if (err) throw err
                    console.table(res);
                    startPrompt();
                }
            )
        });
    });
};

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});