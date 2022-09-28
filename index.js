const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// please import Engineer and Intern libraries
const generateHTML = require("./src/generateHTML");
const manageCard = require("./src/managerHtml");

const teamArr = [];


const quesManager = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the manager's id?",
    name: "id"
  },
 
  {
    type: "input",
    message: "What is the manager's  Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber"
  }
];

const quesEngineer = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "id"
  },
  
  {
    type: "input",
    message: "What is the engineer's Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the engineer's Github username?",
    name: "github"
  }
];

const quesIntern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "id"
  },
  
  {
    type: "input",
    message: "What is the intern's Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the  intern's school?",
    name: "school"
  }
];



function promptManager() {
    inquirer
      .prompt(quesManager)
      .then(function (input) {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        teamArr.push(manager);

        teamPage();
      });
  }
  
  
  function promptEngineer() {
    inquirer
      .prompt(quesEngineer)
      .then(function (input) {
        const engineer = new Engineer(input.name, input.id, input.email, input.gitName)
        teamArr.push(engineer);

        teamPage();
      });
  }

  function promptIntern() {
    inquirer
      .prompt(quesIntern)
      .then(function (input) {
        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamArr.push(intern);

        teamPage();
      });
  }

 

  function teamPage() {

    const createTeamMember = [
      {
        type: "list",
        message: "Which member do you want to add?",
        name: "role",
        choices: [
          "Engineer",
          "Intern",
          "Finish Creating Team" 
        ]
      }];

    inquirer
      .prompt(createTeamMember)
      .then(function (input) {
        

        if (input.role === "Engineer") {
          promptEngineer();
        }
        if (input.role === "Intern") {
          promptIntern();
        }
        else if (input.role === "Finish Create Team") {
        
          
          getHtmlTeam();

          return;
        }
          
      });
  }

  promptManager();


 
let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Team</title>
      <!-- Latest compiled and minified CSS & JS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
      <!--css styling-->
      <style>
          .shadow {
              box-shadow: 5px 5px 5px grey;
          }
      </style>
      <!--end of css styling-->
  </head>
  <body>
      <div class="container-fluid p-0 mb-0">
          <div class="jumbotron jumbotron-fluid bg-danger text-light">
              <div class="container text-center">
                  <h1 class="display-4">My Team</h1>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center" id="cards">
  `;


  let close = `
        </div> 
        </div> 
      </body>
    </html>;`

    function getHtmlTeam() {
  
      for (let  i= 0; i < teamArr.length; i++) {
         
            const card = generateHTML(teamArr[i]);
            html += card;
      }
      html += close; 
      writeFileAsync("./dist/team.html", html)
  
  };
  
  