const inquirer = require('inquirer') ;
const fs = require('fs')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const employees = []

//a function to write README file
function generate() {

    let cards = "";
//cards +=
//loop through each employee and add each to cards
employees.forEach(employee => {
    const employeeRole = employee.getRole()
    if (employeeRole == 'Manager') {
        cards += `
        <div class="card">
            <div class="employeeHeader">
                <h1>${employee.getName()}</h1>
                <h2><i class="fa-solid fa-mug-hot"></i> ${employeeRole}</h2>
            </div>
            <div class='employeeInfo'>
                <div class="id">ID: ${employee.getId()}</div>
                <div class="email">EMAIL: ${employee.getEmail()}</div>
                <div class="last">Office number: ${employee.getOfficeNumber()}</div>
            </div>
        </div>
        `
    }
    else if (employeeRole == 'Engineer') {
        cards += `
        <div class="card">
            <div class="employeeHeader">
                <h2>${employee.getName()}</h2>
                <h2><i class="fa-solid fa-glasses"></i> ${employeeRole}</h2>
            </div>
            <div class='employeeInfo'>
                <div class="id">ID: ${employee.getId()}</div>
                <div class="email">EMAIL: ${employee.getEmail()}</div>
                <div class="last">GitHub: <a href='https://github.com/${employee.getGitHub()}'>${employee.getGitHub()}</a></div>
            </div>
        </div>
        `
    }
    else if (employeeRole == 'Intern') {
        cards += `
        <div class="card">
            <div class="employeeHeader">
                <h2>${employee.getName()}</h2>
                <h2><i class="fa-solid fa-user-graduate"></i> ${employeeRole}</h2>
            </div>
            <div class='employeeInfo'>
                <div class="id">ID: ${employee.getId()}</div>
                <div class="email">EMAIL: ${employee.getEmail()}</div>
                <div class="last">School: ${employee.getSchool()}</div>
            </div>
        </div>
        `
    }
})
    
    const mainTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/7f7e12b7b0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../src/reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>MyTeam</title>
</head>
<body>
    <header><h1>My Team</h1></header>
    <div id="container">
        ${cards}
    </div>
</body>
</html>`;
    
fs.writeFile(`./dist/team.html`, mainTemplate, (err) =>
err
  ? console.error(err)
  : console.log(
      `Team cards have been generated, view it -->`
    )
);
    
}

//a function to initialize app
function addManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s id?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s email?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s office number?',
            name: 'managerOffice',
        }
    ])
    .then(createEmployee);
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your engineer\'s name',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s id?',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s email?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s GitHub?',
            name: 'engineerGit',
        }
    ])
    .then(createEmployee);
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your intern\'s name',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is your intern\'s id?',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'What is your intern\'s email?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What is your intern\'s school?',
            name: 'internSchool',
        }
    ])
    .then(createEmployee);
}

function createEmployee(data) {
    const employeeType = Object.keys(data)[0]
    if (/manager/.test(employeeType)) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice)
        employees.push(manager)
    }
    else if (/engineer/.test(employeeType)) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGit)
        employees.push(engineer)
    }
    else if (/intern/.test(employeeType)) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        employees.push(intern)
    }
    menu()
}

function menu() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'nextEmployee',
            choices: ['Engineer', 'Intern', 'I don\'nt want to add any more team members']
        },
    ])
    .then(addEmployee);
}

function addEmployee(data){
    if (data.nextEmployee == 'Engineer') {
        addEngineer()
    }
    else if (data.nextEmployee == 'Intern') {
        addIntern()
    }
    else generate(data)
    
}

// Function call to initialize app
addManager();