//Dependencies==============================================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
//Added util folder
const util = require("util");
//Installed jest npm i jest --save-dev
const jest = require("jest");
const path = require("path");
const fs = require("fs");
// Path to output folder in Develop folder
const OUTPUT_DIR = path.resolve(__dirname, "output");
// Path to team.html in output folder
const outputPath = path.join(OUTPUT_DIR, "team.html");
// render() method let's you pass the template into a team.html
const render = require("./lib/htmlRenderer");
// writeFile creates a new file --> html 
const writeFileAsync = util.promisify(fs.writeFile);

// Questions=================================== 
const teamArray = [];
function newTeamMember() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add anymore team members?",
        name: "member",
      },
    ])
    .then(function (yes) {
      if (yes.member === true) {
        promptQuestions();
      } else {
        renderFile();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Create questions for each team memeber 
function promptQuestions() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is your role?",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
    ])
    .then(function (reply) {
      if (reply.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your github username?",
              name: "github",
            },
            {
              type: "input",
              message: "What is your employee ID?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
          ])
          .then(function (engineerReply) {
            const newEngineer = new Engineer(
              engineerReply.name,
              engineerReply.id,
              engineerReply.email,
              engineerReply.github
            );
            console.log(newEngineer);
            teamArray.push(newEngineer);
            newTeamMember();
          });
      } else if (reply.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your office number?",
              name: "office",
            },
          ])
          .then(function (managerReply) {
            const newManager = new Manager(
              managerReply.name,
              managerReply.id,
              managerReply.email,
              managerReply.office
            );
            console.log(newManager);
            teamArray.push(newManager);
            newTeamMember();
          });
      } else if (reply.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "Where did you go to school?",
              name: "school",
            },
          ])
          .then(function (internReply) {
            const newIntern = new Intern(
              internReply.name,
              internReply.id,
              internReply.email,
              internReply.school
            );
            console.log(newIntern);
            teamArray.push(newIntern);
            newTeamMember();
          });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function init() {
  promptQuestions();
}
init();

//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
async function renderFile() {
  try {
    const userAnswers = await render(teamArray);
    writeFileAsync(outputPath, userAnswers);
  } catch (err) {
    console.log(err);
  }
}



