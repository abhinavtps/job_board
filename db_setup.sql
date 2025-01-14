CREATE DATABASE IF NOT EXISTS jobs_db;

USE jobs_db;

CREATE TABLE IF NOT EXISTS job_posting (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    company VARCHAR(150) NOT NULL,
    location VARCHAR(255),
    salary INT NOT NULL,
    description TEXT
);

INSERT INTO job_posting (title, company, location, salary, description)
VALUES ('Senior Software Engineer', 'Google', 'Hyderabad, India', '2500000', 'Full Stack Dev role'), 
('Software Engineer', 'Microsoft', 'Noida, India', '2100000', 'Backend Developer role');