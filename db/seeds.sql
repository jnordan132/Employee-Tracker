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
INSERT INTO employee (id, first_name, last_name, title, manager)
VALUEs (1, "John", "Doe", "Sales Lead", "Sales", "100000", null),
       (2, "Mike", "Chan", "Salesperson", "Sales", "80000", "John Doe"),
       (3, "Ashley", "Rodriguez", "Lead Engineer", "Engineering", "150000", null),
       (4, "Kevin", "Tupik", "Software Engineer", "Engineering", "120000", "Ashley Rodriguez"),
       (5, "Anthony", "Singh", "Account Manager", "Finance", "160000", null),
       (6, "Malia", "Brown", "Accountant", "Finance", "125000", "Anthony Singh"),
       (7, "Sarah", "Lourd", "Legal Team Lead", "Legal", "250000", null),
       (8, "Tom", "Allen", "Lawyer", "Legal", "190000", "Sarah Lourd");