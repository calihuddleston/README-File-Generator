// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        default: 'Project Title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description for your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'If applicable, enter your installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instruction and examples for usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If applicable, enter your contribution guidelines',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'If applicable, enter your test instructions',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What licensure would you like to apply?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub profile',
        name: 'profile'
    },
    {
        type: 'input',
        message: 'Please add your e-mail and instructions on how to reach you with additional questions',
        name: 'email'
    }
];

// Write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
    })
}

// Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', data);

            console.log(data);
            return data;
        })
}

// Function call to initialize app
init();
