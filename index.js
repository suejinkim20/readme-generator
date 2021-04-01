// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
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
        name: "tests",
    },
    {
        type: "list",
        message: "Please choose a license for your project.",
        choices: ["MIT License", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"],
        name: "license",
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
        .then((data) => {
            let data = generateMarkdown(answers);
            let fileName = "generatedReadMe.md";
            writeToFile(fileName, data);
        })

}

// Function call to initialize app
init();