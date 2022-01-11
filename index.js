const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { createManager, createEngineer, createIntern, generateHTML } = require('./src/generateHTML');
//const teamArray = [];
const workerArray = [];

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
                type: 'list',
                name: 'role',
                message: "Please confirm the worker's role by hitting enter",
                choices: ['Manager']
            },
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's employee ID number?",
                validate: value => {
                    let pass = !isNaN(value)
                    if (pass && value) {
                        return true
                    }
                    return "Please enter a valid number for the manager's employee ID number!"
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email address?",
                validate: value => {
                    let include = value.includes("@");
                    if (include && value) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email for the team manager!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: value => {
                    let pass = !isNaN(value)
                    if (pass && value) {
                        return true
                    }
                    return "Please enter a valid number for the manager's office number!"
                }
            }
        ])
        .then(managerInfo => {
            // let lowerName = managerInfo.managerName;
            // let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
            // let id = managerInfo.managerId;
            // let email = managerInfo.managerEmail;
            // let officeNumber = managerInfo.officeNumber;
            // let role = managerInfo.role;

            // console.log(name, id, email, officeNumber, role);

            // let manager = new Manager(name, id, email, officeNumber, role);
            // console.log(manager);
            // let nameName = manager.getName();
            // console.log(nameName);
            // teamArray.push(manager);
            // console.log(teamArray);

            let lowerName = managerInfo.managerName;
            let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);

            let manager = new Manager(name, managerInfo.managerId, managerInfo.managerEmail, managerInfo.officeNumber, managerInfo.role);
            console.log(manager);

            let managerHTML = createManager(manager);
            console.log(managerHTML);
            workerArray.push(managerHTML);
            console.log(workerArray);

            this.addTeamMember();
        })
}

StartPrompts.prototype.addTeamMember = function () {
    return inquirer
        .prompt({
            type: 'list',
            name: 'addWorkers',
            message: 'If you would like to add a team member select from the list below. If not select finish building team to create your webpage.',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
            default: 'Finish Building Team'
        })
        .then(({ addWorkers }) => {
            console.log(addWorkers);
            if (addWorkers === 'Engineer') {
                this.addEngineer();
            } else if (addWorkers === 'Intern') {
                this.addIntern();
            } else {
                this.finishTeam(workerArray);
                console.log('Team Profile WebPage Created!');
            }
        })
}

StartPrompts.prototype.addEngineer = function () {

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Please confirm the worker's role by hitting enter",
                choices: ['Engineer']
            },
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: value => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's employee ID number?",
                validate: value => {
                    let pass = !isNaN(value)
                    if (pass && value) {
                        return true
                    }
                    return "Please enter a valid number for the engineer's employee ID number!"
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
                validate: value => {
                    let include = value.includes("@");
                    if (include && value) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email for the engineer!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: value => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's github username!");
                        return false;
                    }
                }
            }
        ])

        .then(engineerInfo => {
            // let lowerName = engineerInfo.engineerName;
            // let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
            // let id = engineerInfo.engineerId;
            // let email = engineerInfo.engineerEmail;
            // let github = engineerInfo.github;
            // let role = engineerInfo.role;

            // console.log(name, id, email, github, role);

            // let engineer = new Engineer(name, id, email, github, role);
            // console.log(engineer);
            // engineer.getName();
            // teamArray.push(engineer);
            // console.log(teamArray);

            let lowerName = engineerInfo.engineerName;
            let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
            // let id = engineerInfo.engineerId;
            // let email = engineerInfo.engineerEmail;
            // let github = engineerInfo.github;
            // let role = engineerInfo.role;

            // console.log(name, id, email, github, role);

            let engineer = new Engineer(name, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.github, engineerInfo.role);
            console.log(engineer);
            // engineer.getName();

            let engineerHTML = createEngineer(engineer);
            console.log(engineerHTML);
            workerArray.push(engineerHTML);
            console.log(workerArray);

            this.addTeamMember();
        })
}

StartPrompts.prototype.addIntern = function () {

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Please confirm the worker's role by hitting enter",
                choices: ['Intern']
            },
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: value => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's employee ID number?",
                validate: value => {
                    let pass = !isNaN(value)
                    if (pass && value) {
                        return true
                    }
                    return "Please enter a valid number for the intern's employee ID number!"
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
                validate: value => {
                    let include = value.includes("@");
                    if (include && value) {
                        return true;
                    } else {
                        console.log("\nPlease enter a valid email for the intern!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school did the intern attend?",
                validate: value => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the school the intern attended!");
                        return false;
                    }
                }
            },
        ])

        .then(internInfo => {
            // let lowerName = internInfo.internName;
            // let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
            // let id = internInfo.internId;
            // let email = internInfo.internEmail;
            // let school = internInfo.school;
            // let role = internInfo.role;

            // console.log(name, id, email, school, role);

            // let intern = new Intern(name, id, email, school, role);
            // console.log(intern);
            // intern.getName();
            // teamArray.push(intern);
            // console.log(teamArray);

            let lowerName = internInfo.internName;
            let name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
            // let id = internInfo.internId;
            // let email = internInfo.internEmail;
            // let school = internInfo.school;
            // let role = internInfo.role;

            //console.log(name, id, email, school, role);

            let intern = new Intern(name, internInfo.internId, internInfo.internEmail, internInfo.school, internInfo.role);
            console.log(intern);
            // intern.getName();
            // teamArray.push(intern);
            // console.log(teamArray);
            let internHTML = createIntern(intern);
            console.log(internHTML);
            workerArray.push(internHTML);
            console.log(workerArray);

            this.addTeamMember();
        })
}
// const workerArray = [];

StartPrompts.prototype.finishTeam = function (workTeam) {

    // console.log(team)

    // team.forEach(getInfo);

    // function getInfo(value) {

    //     if (value.role === "Manager") {
    //         let manager = createManager(value.name, value.role, value.id, value.email, value.officeNumber)
    //         console.log(manager);
    //         workerArray.push(manager);

    //     } else if (value.role === "Engineer") {
    //         let engineer = createEngineer(value.name, value.role, value.id, value.email, value.github)
    //         console.log(engineer);
    //         workerArray.push(engineer);

    //     } else if (value.role === "Intern") {
    //         let intern = createIntern(value.name, value.role, value.id, value.email, value.school)
    //         console.log(intern);
    //         workerArray.push(intern);
    //     }
        let finalHTML = generateHTML(workTeam);
        writeFile(finalHTML)
            .catch(err => {
                console.log(err);
            })
    }
//}

const writeFile = finalHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/new_index.html', finalHTML, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Team Profile WebPage Created!'
            });
        });
    });
};

new StartPrompts()
