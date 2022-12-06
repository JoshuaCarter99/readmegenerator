// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./markdown/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of the README?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your README!"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the project's intended use?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of this project?",
        choices: ["MIT", "Apache", "Mozilla", "None"],
        default: ["MIT"]
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter yout github username!"
    },
    {   type: "input",
        name: "email",
        message: "Enter your email address for contact",
        validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter correct email address!");
                    return false;
                }
            }
    },
        
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var readme = generateMarkdown(data);
    fs.writeFile(fileName, readme, function (err) {
      console.log(err);
      console.log("Your README is being generated!");
    });
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then(function (answers) {
      writeToFile("newREADME.md", answers);
    });
  }
  
  // // Function call to initialize app
  init();