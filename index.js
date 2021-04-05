// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Describe the steps to install your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Explain usage information.",
        name: "usage",
    },
    {
        type: "input",
        message: "Describe contribution guidelines.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Explain testing instructions",
        name: "testing",
    },
    {
        type: "list",
        message: "Please choose a license for your project.",
        choices: ["MIT License", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"],
        name: "license",
    },
    {
        type: "input",
        message: "Enter your github username",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email address for questions",
        name: "email",
    },
    {
        type: "input",
        message: "What year is it?",
        name: "year",
    },
    {
        type: "input",
        message: "What is your full name?",
        name: "fullname",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let readmeFile = generateMarkdown(answers);
            let fileName = "generatedReadMe.md";
            writeToFile(fileName, readmeFile);
        })

}

// Function call to initialize app
init();