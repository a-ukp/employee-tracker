-- create database
DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

-- create tables
-- department
CREATE TABLE department (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `depName` VARCHAR(30),
    PRIMARY KEY (id)
);

-- roleTable because role was highlighting blue
CREATE TABLE roleTable (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(30),
    `salary` DECIMAL,
    `department_id` INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- employee
CREATE TABLE employee (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `role_id` INTEGER,
    `manager_id` INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roleTable(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- department seeds
INSERT INTO department (`depName`) VALUE 
    ("Finance"),
    ("Human Resources"),
    ("Sales"),
    ("IT"),
    ("General");

-- role seeds
INSERT INTO roleTable (`title`, `salary`, `department_id`) VALUE
    ("Finance Manager", 200000, 1),
    ("SR Accountant", 100000, 1),
    ("JR Accountant", 80000, 1),
    ("Accountant Intern", 60000, 1),
    ("HR Manager", 180000, 2),
    ("SR Administrator", 90000, 2),
    ("JR Administrator", 70000, 2),
    ("Administrator Intern", 50000, 2),
    ("Sales Manager", 160000, 3),
    ("Sales Lead", 80000, 3),
    ("Sales Associate", 60000, 3),
    ("Stock Associate", 40000, 3),
    ("IT Manager", 220000, 4),
    ("Programming Engineer", 110000, 4),
    ("Hardware Maintenance", 90000, 4),
    ("Programming Intern", 70000, 4),
    ("Security", 30000, 5),
    ("Janitor", 25000, 5),
    ("Receptionist", 27000, 5);

-- employee seeds
INSERT INTO employee (`first_name`, `last_name`, `role_id`, `manager_id`) VALUE
    ("Jonas", "Goodwin", 1, null),
    ("Violet", "Galindo", 5, null),
    ("Fabien", "Mason", 9, null),
    ("Emma-Louise", "Atkins", 13, null),
    ("Fabien", "Cortez", 8, 2),
	("Zidane", "Jones", 11, null),
    ("Loki", "Richards", 15, 4),
    ("Victor", "Evans", 19, null),
    ("Nayla", "Pratt", 10, 9),
    ("Patricia", "Arias", 4, 1);

-- select to view tables
SELECT * FROM department;
SELECT * FROM roleTable;
SELECT * FROM employee;
