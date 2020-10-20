const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const employees = [];
getPosition()

function getPosition(){
  inquirer.prompt({
    type: "list",
    message: "POSITION:",
    name: "position",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "I am done entering."
    ]
  }).then(response => {
    console.log(response)
    switch(response.position){
      case "Engineer": engineerQuestions();
      break;
      case "Intern": internQuestions();
      break;
      case "Manager": managerQuestions();
      break;
      default: createTeamMemberCard();
    }  
  });
  }


function managerQuestions(){
  inquirer.prompt([
    {
      type: "input",
      message: "NAME:",
      name: "name"
    },
    {
      type: "input",
      message: "ID NUMBER:",
      name: "id"
    },
    {
      type: "input",
      message: "EMAIL:",
      name: "email"
    },
    {
      type: "input",
      message: "OFFICE NUMBER:",
      name: "officeNumber"
    }
  ]).then((response) => {
    var manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    employees.push(manager)
    getPosition()
    
  })

}
function internQuestions(){
  inquirer.prompt([
    {
      type: "input",
      message: "NAME:",
      name: "name"
    },
    {
      type: "input",
      message: "ID NUMBER:",
      name: "id"
    },
    {
      type: "input",
      message: "EMAIL:",
      name: "email"
    },
    {
      type: "input",
      message: "SCHOOL:",
      name: "school"
    }
  ]).then((response) => {
    var intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    employees.push(intern)
    getPosition()
  })
}

function engineerQuestions(){
  inquirer.prompt([
    {
      type: "input",
      message: "NAME:",
      name: "name"
    },
    {
      type: "input",
      message: "ID NUMBER:",
      name: "id"
    },
    {
      type: "input",
      message: "EMAIL:",
      name: "email"
    },
    {
      type: "input",
      message: "GITHUB:",
      name: "github"
    }
  ]).then((response) => {
    var engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    employees.push(engineer)
    getPosition()
  })
}
  function createTeamMemberCard(){
    // fs.mkdirSync(OUTPUT_DIR);
    fs.writeFileSync(outputPath, render(employees, "utf8"))
  }



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
