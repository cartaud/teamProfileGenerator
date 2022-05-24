const inquirer = require('inquirer') ;
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// const containerEl = document.querySelector('#container')

const employees = []

//a function to write README file
function generate() {
    employees.forEach(employee => {
        const employeeRole = employee.getRole()
        const card = document.createElement('div')
        
        if (employeeRole == 'Manager') {
            card.innerHTML = `
            <h1>${employee.getName()}</h1>
            <h2><i class="fa-solid fa-mug-hot"></i> ${employeeRole}</h2>
            <div class='employeeInfo'>
                <div>ID: ${employee.getId()}</div>
                <div>EMAIL: ${employee.getEmail()}</div>
                <div>Office number: ${employee.getOfficeNumber()}</div>
            </div>
            `
        }
        else if (employeeRole == 'Engineer') {
            card.innerHTML = `
            <h1>${employee.getName()}</h1>
            <h2><i class="fa-solid fa-glasses"></i> ${employeeRole}</h2>
            <div class='employeeInfo'>
                <div>ID: ${employee.getId()}</div>
                <div>EMAIL: ${employee.getEmail()}</div>
                <div>GitHub: <a href='https://github.com/${employee.getGitHub()}'>${employee.getGitHub()}</a></div>
            </div>
            `
        }
        else if (employeeRole == 'Intern') {
            card.innerHTML = `
            <h1>${employee.getName()}</h1>
            <h2><i class="fa-solid fa-user-graduate"></i> ${employeeRole}</h2>
            <div class='employeeInfo'>
                <div>ID: ${employee.getId()}</div>
                <div>EMAIL: ${employee.getEmail()}</div>
                <div>School: ${employee.getSchool()}</div>
            </div>
            `
        }
        
        containerEl.append(card)
    })
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