-- Department seeds
INSERT INTO departments (id, name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO roles (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

-- Employee seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jacob", "Nordan", 1, null),
       ("John", "Doe", 2, 1),
       ("Mike", "Chan", 3, 3),
       ("Ashley", "Rodriguez", 4, 1),
       ("Kevin", "Tupik", 5, 4), 
       ("Anthony", "Singh", 6, 1),
       ("Malia", "Brown", 7, 5),
       ("Sarah", "Lourd", 8, 1),
       ("Tom", "Allen", 9, 6);