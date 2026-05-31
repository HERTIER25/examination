CREATE DATABASE EPMS;
USE EPMS;

CREATE TABLE Users(
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(100),
    Password VARCHAR(255)
);

CREATE TABLE Department(
    DepartmentCode VARCHAR(10) PRIMARY KEY,
    DepartmentName VARCHAR(100),
    GrossSalary DECIMAL(10,2)
);


CREATE TABLE Employee(
    EmployeeNumber INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    Position VARCHAR(100),
    Address VARCHAR(100),
    Telephone VARCHAR(20),
    Gender VARCHAR(20),
    HiredDate DATE,
    DepartmentCode VARCHAR(10),

    FOREIGN KEY (DepartmentCode)
    REFERENCES Department(DepartmentCode)
);


CREATE TABLE Salary(
    SalaryID INT AUTO_INCREMENT PRIMARY KEY,
    GrossSalary DECIMAL(10,2),
    TotalDeduction DECIMAL(10,2),
    NetSalary DECIMAL(10,2),
    Month VARCHAR(20),

    EmployeeNumber INT,
    DepartmentCode VARCHAR(10),

    FOREIGN KEY (EmployeeNumber)
    REFERENCES Employee(EmployeeNumber),

    FOREIGN KEY (DepartmentCode)
    REFERENCES Department(DepartmentCode)
);