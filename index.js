// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateReadMe = require("./src/page-template.js");
const  writeFile = require("./utils/generateFile.js");

// TODO: Create an array of questions for user input
const questions = () => {
    
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log("Enter your project's name, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        validate: projectDesc => {
            if (projectDesc) {
                return true;
            } else {
                console.log("Enter your project's description, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your project's installation instructions.",
        validate: installationInfo => {
            if (installationInfo) {
                return true;
            } else {
                console.log("Enter your project's installation instructions, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project's usage information.",
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                console.log("Enter your project's usage information, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your project's contribution guidelines.",
        validate: contributionInfo => {
            if (contributionInfo) {
                return true;
            } else {
                console.log("Enter your project's contribution guidelines, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project's test instructions.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Enter your project's test instructions, please!");
                return false
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What is license does your project use?",
        choices: ["Apache License 2.0", "MIT", "GNU GPLv3", "GNU GPLv2", "ISC"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Enter your GitHub Username, please!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Enter your email address, please!");
                return false
            }
        }
    }
])
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ==================================================
    Let's Make a Quality README File for Your Project!
    ==================================================
    `);
    return questions();
}

// Function call to initialize app
init()
    .then(data => {
        return generateReadMe(data);
    })
    .then(readMeFile => {
        return writeFile(readMeFile);
    })
    .catch(err => {
        console.log(err);
    });
