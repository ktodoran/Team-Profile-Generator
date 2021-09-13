const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { template } = require('@babel/core');
const generateHTML = require('./src/htmlTemplate');
const writeFile = require('./src/generatePage');

let employeeArr = [];

//inquirer validation for emails

//inquirer general validation
const validation = input => {
    if (input) {
        return true;
    }
    else {
        console.log("You must answer this question.");
    }
};

//inquirer  initial questions
const initialQuestions = [
    { type: 'input', name: 'teamName', message: "What is the name of your team?", validate: validation },
    { type: 'input', name: 'managerName', message: "What is the name of your team's manager?", validate: validation },
    { type: 'input', name: 'managerId', message: "What is this managers's ID number?", validate: validation },
    { type: 'input', name: 'managerEmail', message: "What is this manager's email address?", validate: validation },
    { type: 'input', name: 'managerOfficeNum', message: "What is your manager's office number?", validate: validation }
];

//question prompt function

const showInitialQuestions = () => {
    return inquirer.prompt(initialQuestions);
};

const showEmployeeQuestions = employeeData => {
    //If no employee array, create one
    if (!employeeData.employees) {
        employeeData.employees = [];
    }

    console.log(`
    =================
    Add a New Employee
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: "What is this employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is this employee's name?",
            validate: validation
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is this employee's ID?",
            validate: validation
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is this employee's email address?",
            validate: validation
        },
        {
            type: 'input',
            name: 'employeeGithub',
            message: "What is this employee's GitHub username?",
            when: ({ employeeRole }) => {
                if (employeeRole === "Engineer") {
                    return true;
                }
                else {
                    return false;
                }
            },
            validate: validation
        },
        {
            type: 'input',
            name: 'employeeSchool',
            message: "What is this employee's university?",
            when: ({ employeeRole }) => {
                if (employeeRole === "Intern") {
                    return true;
                }
                else {
                    return false;
                }
            },
            validate: validation
        },
        {
            type: 'confirm',
            name: 'employeeAdd',
            message: 'Would you like to add another employee?',
            default: true
        }
    ])
        .then(employeeInfo => {
            employeeData.employees.push(employeeInfo)
            if (employeeInfo.employeeAdd) {
                return showEmployeeQuestions(employeeData);
            }
            else {
                return employeeData;
            }
        })
};

//initialize application
showInitialQuestions()
    .then(showEmployeeQuestions)
    .then(employeeData => {
        const manager = new Manager(employeeData.managerName, parseInt(employeeData.managerId), employeeData.managerEmail, employeeData.managerOfficeNum);
        employeeArr.push(manager);
        employeeData.employees.forEach(element => {
            if (element.employeeRole === "Engineer") {
                const engineer = new Engineer(element.employeeName, parseInt(element.employeeId), element.employeeEmail, element.employeeGithub);
                employeeArr.push(engineer);
            }
            else if (element.employeeRole === "Intern") {
                const intern = new Intern(element.employeeName, parseInt(element.employeeId), element.employeeEmail, element.employeeSchool);
                employeeArr.push(intern);
            }
        })

        return generateHTML(employeeData.teamName, employeeArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(HTMLResponse => {
        console.log(HTMLResponse.message);
    })
    .catch(err => {
        console.log(err);
    });