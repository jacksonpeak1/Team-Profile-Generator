const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

const render = require("./src/page-template");

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

const generateManager = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    //create a new manager object
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    //push the manager object into the teams array
    team.push(manager);
    //ask next questions - more?
    addMore();
  });
};

const generateEngineer = () => {
  inquirer.prompt(engineerQuestions).then((answers) => {
    //create a new Engineer object
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    //push the Engineer object into the teams array
    team.push(engineer);
    //ask next questions - more?
    addMore();
  });
};

const generateIntern = () => {
  inquirer.prompt(internQuestions).then((answers) => {
    //create a new Intern object
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    //push the Intern object into the teams array
    team.push(intern);
    //ask next questions - more?
    addMore();
  });
};

const addMore = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "pick",
        message: "What type to add?",
        choices: ["Engineer", "Manager", "Intern", "Nah, I am good"],
      },
    ])
    .then((answer) => {
      switch (answer.pick) {
        case "Engineer":
          generateEngineer();
          break;
        case "Manager":
          generateManager();
          break;
        case "Intern":
          generateIntern();
          break;
        default:
          buildTeam();
          break;
      }
    });
};

function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

generateManager();
