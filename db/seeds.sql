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
('Research', 30000.00, 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jeri', 'Smith', 1, 456);
-- UPDATE employee SET role_id = 2 WHERE id = 1

