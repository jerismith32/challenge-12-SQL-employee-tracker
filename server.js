const inquirer = require('inquirer');
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startQuestions();

});

//Inital question for the user to decide what they would like to do
const questions = [
    {
        type: 'list',
        name: 'initialQuestion',
        message: "What would you like to do?",
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Cancel']
    },
]

//This will capture the users' response to the initial question and direct them appropriately
function startQuestions() {
    inquirer.prompt(questions).then(function(data) {
        console.log(data);
        if (data.initialQuestion === 'view all departments') {
            console.log('view all Departments');
            viewAllDepartments();
        }
        else if (data.initialQuestion === 'view all roles') {
            console.log('view all roles');
            viewAllRoles();
        }
        else if (data.initialQuestion === 'view all employees') {
            console.log('view all employees');
            viewAllEmployees();
        }
        else if (data.initialQuestion === 'add a department') {
            console.log('add a department');
            addADepartment();
        }
        else if (data.initialQuestion === 'add a role') {
            console.log('add a role');
            addARole();
        }
        else if (data.initialQuestion === 'add an employee') {
            console.log('add a employee');
            addAnEmployee();
        }
        else if (data.initialQuestion === 'update an employee role') {
            console.log('update employee');
            updateEmployee();
        }
        else if (data.initialQuestion === 'Cancel') {
            console.log('Cancel');
            addAnEmployee();
        }
    })
};

//View All Departments
function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
    startQuestions();
};

//View All Roles
function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
};

//View All Employees
function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
};

//Add a Department
function addADepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: "What department would you like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the department you are trying to add here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('data.addDepartment',data.addDepartment);
        db.query(`INSERT INTO department (name) values ("${data.addDepartment}")`,  function (err, results) {
            console.log("Successfully added new department.");
            viewAllDepartments();
        });
    })
    
};

//Add a Role: shows department and roles that are already in the database and then prompts the user to add in the role, salary and department id
function addARole() {
    viewAllDepartments();
    viewAllRoles();
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: "What role would you like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the role you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: "What is the salary for this role?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the salary for the role you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'addDepartmentID',
            message: "What is the department ID for the role you want to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the department ID for the role you are trying to add here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('Add Role Data', data);
        db.query(`INSERT INTO role (title, salary, department_id) values ("${data.addRole}", ${data.roleSalary}, ${data.addDepartmentID})`,  function (err, results) {
            console.log("Successfully added new role.");
            viewAllRoles();
        });
    })
    
};

//Add an Employee, FIX THIS!!!!!!
function addAnEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addEmployee',
            message: "What employee would you like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee you are trying to add here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('data.addEmployee',data.addEmployee);
        db.query(`INSERT INTO department (name) values ("${data.addEmployee}")`,  function (err, results) {
            console.log("Successfully added new employee.");
            viewAllEmployees();
        });
    })
    
}

function updateEmployee() {
    viewAllRoles();
    viewAllEmployees();
    inquirer.prompt([
        {
            type: 'input',
            name: 'updateEmployeeID',
            message: "What is the ID of the employee you would like to update?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee ID you are trying to update here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'updateRole',
            message: "What is the role id you would like to update the employee information with?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the role ID for the employee you are trying to update here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        //console.log('data', data);
        //console.log('data.updateEmployeeID', data.updateEmployeeID);
        //console.log('data.updateRole', data.updateRole);
        db.query(`UPDATE employee SET role_id = "${data.updateRole}" WHERE id = "${data.updateEmployeeID}"`), function (err, results) {
            console.log("Employee successfully updated");
            viewAllEmployees();
        };
    });
}