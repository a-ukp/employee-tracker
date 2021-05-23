# Employee Tracker Application

## Description
Application that helps view data in MySQL in command line.

## Preview

## Installation
* Use SSH Key to Git Clone
* Download latest version MySQL Workbench
* Open a new SQL editor, copy and run the following code
    ```
    DROP DATABASE IF EXISTS employeetracker_db;
    CREATE DATABASE employeetracker_db;
    ```
* In `app.js` file, edit to your personal host, port, user, and password
* Begin application with `npm start`

## Issues
* MySQL Workbench would not recognize CONCAT() function, causing some data to be missing in certain tables.

## Credits
* [SQL Tutorial](https://www.w3schools.com/sql/default.asp)