const inquirer = require('inquirer') ;
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const employees = []

//a function to write README file
function writeToFile(data) {
    console.log(data)
    fs.writeFile('', generate(data), (err) =>
        err ? console.error(err) : console.log('README Generated!')
  );
}

//a function to initialize app
function init() {
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
        },
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
    employees.pus(data)
    if (data.nextEmployee == 'Engineer') {
        addEngineer()
    }
    else if (data.nextEmployee == 'Intern') {
        addIntern()
    }
    else writeToFile(data)
    
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
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'nextEmployee',
            choices: ['Engineer', 'Intern', 'I don\'nt want to add any more team members']
        },
    ])
    .then(addEmployee);
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
            name: 'internGit',
        },
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'nextEmployee',
            choices: ['Engineer', 'Intern', 'I don\'nt want to add any more team members']
        },
    ])
    .then(addEmployee);
}

// Function call to initialize app
init();