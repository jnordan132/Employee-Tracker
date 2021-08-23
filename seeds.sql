-- Department seeds
INSERT INTO department (department_id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

-- Role seeds
INSERT INTO role (department_id, department, title, salary)
VALUES (1, "Sales", "Sales Lead", 100000),
       (1, "Sales", "Salesperson", 80000),
       (1, "Engineering", "Lead Engineer", 150000),
       (1, "Engineering", "Software Engineer", 120000),
       (1, "Finance", "Accountant Manager", 160000),
       (1, "Finance", "Accountant", 125000),
       (1, "Legal", "Legal Team Lead", 250000),
       (1, "Legal", "Lawyer", 190000);

       
