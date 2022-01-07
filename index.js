const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];

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
            type:'list',
            name:'role',
            message:"Please confirm the worker's role by hitting enter",
            choices:['Manager']
        },
        {
            type: 'text',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'text',
            name: 'managerId',
            message: "What is the manager's employee ID number?"
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "What is the manager's email address?"
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
    .then(managerInfo => {
        let name = managerInfo.managerName;
        let id = managerInfo.managerId;
        let email = managerInfo.managerEmail;
        let officeNumber = managerInfo.officeNumber;
        let role = managerInfo.role;

        console.log(name, id, email, officeNumber, role);

        let manager = new Manager(name, id, email, officeNumber, role);
        teamArray.push(manager);
        console.log(teamArray);

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
                type:'list',
                name:'role',
                message:"Please confirm the worker's role by hitting enter",
                choices:['Engineer']
            },
            {
                type:'text',
                name:'engineerName',
                message:"What is the engineer's name?"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is the engineer's employee ID number?"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is the engineer's email address?"
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            }
        ])
        
        .then(engineerInfo => {
            let name = engineerInfo.engineerName;
            let id = engineerInfo.engineerId;
            let email = engineerInfo.engineerEmail;
            let github = engineerInfo.github;
            let role = engineerInfo.role;

            console.log(name, id, email, github, role);

            let engineer = new Engineer(name, id, email, github, role);
            teamArray.push(engineer);
            console.log(teamArray);
    
            this.addTeamMember();
        })
}

StartPrompts.prototype.addIntern = function() {

    return inquirer
        .prompt([
            {
                type:'list',
                name:'role',
                message:"Please confirm the worker's role by hitting enter",
                choices:['Intern']
            },
            {
                type:'text',
                name:'internName',
                message:"What is the intern's name?"
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is the intern's employee ID number?"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is the intern's email address?"
            },
            {
                type: 'text',
                name: 'school',
                message: "What school did the intern attend?"
            },
        ])

        .then(internInfo => {
            let name = internInfo.internName;
            let id = internInfo.internId;
            let email = internInfo.internEmail;
            let school = internInfo.school;
            let role = internInfo.role;
    
            console.log(name, id, email, school, role);

            let intern = new Intern(name, id, email, school, role);
            teamArray.push(intern);
            console.log(teamArray);
    
            this.addTeamMember();
        })
}

new StartPrompts();