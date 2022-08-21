// attaching the files for all team members
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// FS + Path Modules
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// directory path
const dir = path.resolve(__dirname, 'dist');

// path for output
const distHTML = path.join(dir, 'index.html');

// template for generating page
const generatePage = require('./src/page-template.js');

// empty array for team info
const teamArray = [];

// prompts to create the team
const createTeam = () => {
    console.log('Answer the following prompts to generate your team profile!');
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter your team manager's name.",
                validate: nameInput => {
                    if(nameInput === ''){
                        console.log("Please enter a valid name.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Enter your team manager's ID number.",
                validate: idInput => {
                    if(idInput === ''){
                        console.log("Please enter a valid ID number.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Enter your team manager's email.",
                validate: emailInput => {
                    if(emailInput === ''){
                        console.log("Please enter a valid email.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Enter your team manager's office number.",
                validate: officeNumberInput => {
                    if(officeNumberInput === ''){
                        console.log("Please enter a valid office number.");
                        return false;
                    }
                    return true;
                }
            }

        ])
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // add the newly created manager to the team array
            teamArray.push(manager);
            // calling function to add team member
            addTeamMember();
        });
};

// prompts to add the team members to the team
const addTeamMember = () => {
    return inquirer
        .prompt([
            {
                type:'list',
                name: 'memberType',
                message: 'Which type of team member would you like to add to your team?',
                choices: ['Engineer', 'Intern', "I do not need to add any additional team members."]
            }
        ])
        .then((choice) => {
            switch(choice.memberType) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'I do not need to add any additional team members.':
                    buildTeam();
                    break;
            }
        });
};

// additional prompts for adding an engineer
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the engineer's name.",
                validate: nameInput => {
                    if(nameInput === ''){
                        console.log("Please enter a valid name.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please enter the engineer's ID number.",
                validate: idInput => {
                    if(idInput === ''){
                        console.log("Please enter a valid ID.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter the engineer's email address.",
                validate: emailInput => {
                    if(emailInput === ''){
                        console.log("Please enter a valid email address.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter the engineer's Github username.",
                validate: githubInput => {
                    if(githubInput === ''){
                        console.log("Please enter a valid Github username.");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            // add the newly created engineer to the team array
            teamArray.push(engineer);
            // calling function to add team member
            addTeamMember();
        });
};

// additional prompts for adding an intern
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the intern's name.",
                validate: nameInput => {
                    if(nameInput === ''){
                        console.log("Please enter a valid name.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "Please enter the intern's ID number.",
                validate: idInput => {
                    if(idInput === ''){
                        console.log("Please enter a valid ID number.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter the intern's email address.",
                validate: emailInput => {
                    if(emailInput === ''){
                        console.log("Please enter a valid email address.");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the intern's school name.",
                validate: schoolInput => {
                    if(schoolInput === ''){
                        console.log("Please enter a valid school name.");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            // add the newly created intern to the team array
            teamArray.push(intern);
            // calling function to add team member
            addTeamMember();
        });
};

// function that generates HTML output
const buildTeam = ()  => {
    console.log("Team page is initializing!");
    fs.writeFileSync(distHTML, generatePage(teamArray), 'utf-8');
    console.log("Team Page has been generated successfully!");
};

// call the function for createTeam to kick off the application
createTeam();