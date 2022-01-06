const fs = require('fs');
const inquirer = require('inquirer');

function StartPrompts() {
    console.log("Welcome to the team profile generator! With this application you can enter your team member's names and information in order to create a team profile webpage.");

        inquirer
        .prompt({
            type: 'confirm',
            name: 'confirmPrompts',
            message: 'Would you like to start creating your team profile?',
            default: true
        })
        .then(answer => {
            if (answer.confirmPrompts === true) {
               this.workerPrompts();
            } else {
                return false;
            }
        });
}

StartPrompts.prototype.workerPrompts = function () {
    return inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is your team manager's name?"
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
    // .then(mangerInfo => {

    // })
   
    .then(()=> {
        this.addTeamMember();
    })
}

StartPrompts.prototype.addTeamMember = function() {
    return inquirer 
            .prompt({
                type:'list',
                name:'addWorkers',
                message:'If you would like to add a team member select from the list below. If not select finish building team to create your webpage.',
                choices:['Engineer', 'Intern', 'Finish Building Team'],
                default:'Finish Building Team'
            })
        .then(({addWorkers}) => {
            console.log(addWorkers);
            if(addWorkers === 'Engineer'){
                this.addEngineer();
            } else if (addWorkers === 'Intern') {
                this.addIntern();
            } else {
                console.log('FINISHED');
            }
        })
}

StartPrompts.prototype.addEngineer = function() {

    return inquirer
        .prompt([
            {
                type:'text',
                name:'engineerName',
                message:"What is your engineer's name?"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is your engineer's employee ID number?"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is your engineer's email address?"
            },
            {
                type: 'text',
                name: 'github',
                message: "What is your engineer's GitHub username?"
            }
        ])
        .then(()=> {
            this.addTeamMember();
        })
}

StartPrompts.prototype.addIntern = function() {

    return inquirer
        .prompt([
            {
                type:'text',
                name:'internName',
                message:"What is your intern's name?"
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is your intern's employee ID number?"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is your intern's email address?"
            },
            {
                type: 'text',
                name: 'school',
                message: "What school did your intern attend?"
            },
        ])
        .then(()=> {
            this.addTeamMember();
        })
}

new StartPrompts();