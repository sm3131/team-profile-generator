//const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { createManager, createEngineer, createIntern, generateHTML } = require('./src/generateHTML')
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
                this.finishTeam(teamArray);
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
    const workerArray = [];

    StartPrompts.prototype.finishTeam = function(team) {

    console.log(team)
    team.forEach(getInfo);

    function getInfo(value) {

        if (value.role === "Manager") {
            // let name = value.name
            // let id = value.id;
            // let email = value.email;
            // let role = value.role;
            // let officeNumber = value.officeNumber;
            // console.log(name);
            // console.log(id);
            // console.log(email);
            // console.log(role);
            // console.log(officeNumber);
            let manager = createManager(value.name, value.role, value.id, value.email, value.officeNumber)
            console.log(manager);
            workerArray.push(manager);
            
        } else if (value.role === "Engineer") {
            // let name = value.name
            // let id = value.id;
            // let email = value.email;
            // let role = value.role;
            // let github = value.github;
            // console.log(name);
            // console.log(id);
            // console.log(email);
            // console.log(role);
            // console.log(github);
            let engineer = createEngineer(value.name, value.role, value.id, value.email, value.github)
            console.log(engineer);
            workerArray.push(engineer);
        
        } else if (value.role === "Intern") {
            // let name = value.name
            // let id = value.id;
            // let email = value.email;
            // let role = value.role;
            // let school = value.school;
            // console.log(name);
            // console.log(id);
            // console.log(email);
            // console.log(role);
            // console.log(school);
            let intern = createIntern(value.name, value.role, value.id, value.email, value.school)
            console.log(intern);
            workerArray.push(intern);
        }
        let finalHTML = generateHTML(workerArray);
        console.log(finalHTML);
        writeFile(finalHTML);
    }
}

const writeFile = finalHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/new_index.html', finalHTML, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'Team Profile WebPage Created!'
        });
      });
    });
  };

new StartPrompts()

//module.exports = StartPrompts;