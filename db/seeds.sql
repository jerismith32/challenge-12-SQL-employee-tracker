USE employeeTracker;

INSERT INTO department
(name)
VALUES
('Chemistry'),
('HR');

INSERT INTO role
(title, salary, department_id)
VALUES
('Head Chemist', 40000.00, 1);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jeri', 'Smith', 1, 456);
