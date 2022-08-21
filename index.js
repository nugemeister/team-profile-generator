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

// prompts to add the team members to the team

// additional prompts for adding an engineer

// additional prompts for adding an intern

// function that generates HTML output
const buildTeam = ()  => {
    console.log("Team page is initializing!");
    fs.writeFileSync(distHTML, generatePage(teamArray), 'utf-8');
    console.log("Team Page has been generated successfully!");
};

// call the function for createTeam to kick off the application
createTeam();