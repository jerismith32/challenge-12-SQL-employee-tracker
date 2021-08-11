USE employeeTracker;

INSERT INTO department
(name)
VALUES
('Business'),
('Creative'),
('Guest/Customer Service'),
('Innovation and Technology'),
('Production and Entertainment'),
('Marketing and Communication');

INSERT INTO role
(title, salary, department_id)
VALUES
('Administrative', 40000.00, 1),
('Business Development', 40000.00, 1),
('Compliance', 40000.00, 1),
('Human Resources', 40000.00, 1),
('Animation', 50000.00, 2),
('Content Development', 50000.00, 2),
('Digital and Interactive Media', 50000.00, 2),
('Gaming', 50000.00, 2),
('Call Center', 30000.00, 3),
('Food and Beverage', 30000.00, 3),
('Hotel', 30000.00, 3),
('Cruise Ship Jobs', 30000.00, 3),
('Park Operations', 30000.00, 3),
('Recreation', 30000.00, 3),
('Retail Operations', 30000.00, 3),
('Data', 60000.00, 4),
('Engineering', 60000.00, 4),
('Medical', 60000.00, 4),
('Quality Assurance', 60000.00, 4),
('Research', 60000.00, 4),
('Research and Development', 60000.00, 4),
('Sciences', 60000.00, 4),
('Supply Chain Management', 60000.00, 4),
('Technology', 60000.00, 4),
('Broadcast', 50000.00, 5),
('Production', 50000.00, 5),
('Studio Operations', 50000.00, 5),
('Communications', 30000.00, 6),
('Creative', 30000.00, 6),
('Marketing and Promotion', 30000.00, 6),
('Sales', 30000.00, 6);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jeri', 'Smith', 24, 123),
('Erin', 'Smith', 30, 456),
('Rapunzel', 'Rider', 14, 789),
('Mickey', 'Mouse', 1, 001),
('Minnie', 'Mouse', 19, 002);

-- UPDATE employee SET role_id = 2 WHERE id = 1

