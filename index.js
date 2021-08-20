const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const viewOrAdd = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Manager name?'
        },
        {},
    ])
}