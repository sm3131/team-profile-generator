const fs = require('fs');
const inquirer = require('inquirer');

function startPrompts() {
    console.log("Welcome to the team profile generator! With this application you can enter your team member's names and information in order to create a team profile webpage.");

    return inquirer
        .prompt([
            {
            type: 'confirm',
            name: 'confirmPrompts',
            message: 'Would you like to start creating your team profile?',
            default: true
            },
            {
                type: 'text',
                name: 'name',
                message: "What is your team manager's name?",
                when: ({confirmPrompts}) => {
                    if (confirmPrompts) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is your manager's employee ID number?"
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is your manager's email address?"
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is your manager's office number?"
            }
        ])
        
}

startPrompts()