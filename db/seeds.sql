-- Department seeds
INSERT INTO departments (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal"),
       (5, "Board");

-- Role seeds
INSERT INTO roles (department_id, title, salary)
VALUES (1, "Sales Lead", 100000),
       (1, "Salesperson", 80000),
       (2, "Lead Engineer", 150000),
       (2, "Software Engineer", 120000),
       (3, "Accountant Manager", 160000),
       (3, "Accountant", 125000),
       (4, "Legal Team Lead", 250000),
       (4, "Lawyer", 190000),
       (5, "CEO", 1000000);

-- Employee seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUEs ("John", "Doe", 1, 5),
       ("Mike", "Chan", 1, 3),
       ("Ashley", "Rodriguez", 2, 5),
       ("Kevin", "Tupik", 2, 4),
       ("Anthony", "Singh", 3, 5),
       ("Malia", "Brown", 3, 5),
       ("Sarah", "Lourd", 4, 5),
       ("Tom", "Allen", 4, 6),
       ("Jacob", "Nordan", 5, null);