-- Department seeds
INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Role seeds
INSERT INTO role (department_id, title, salary)
VALUES (1, "Sales Lead", 100000),
       (1, "Salesperson", 80000),
       (2, "Lead Engineer", 150000),
       (2, "Software Engineer", 120000),
       (3, "Accountant Manager", 160000),
       (3, "Accountant", 125000),
       (4, "Legal Team Lead", 250000),
       (4, "Lawyer", 190000);

-- Employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUEs ("John", "Doe", 1),
       ("Mike", "Chan", 1, 10),
       ("Ashley", "Rodriguez", 2),
       ("Kevin", "Tupik", 2, 11),
       ("Anthony", "Singh", 3),
       ("Malia", "Brown", 3, 12),
       ("Sarah", "Lourd", 4),
       ("Tom", "Allen", 4, 13);