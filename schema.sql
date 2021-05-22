-- create database
DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

-- create tables
-- department
CREATE TABLE department (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30),
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