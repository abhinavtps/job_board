import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config();


// Create a connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();


//Corresponding to 1st point create a new job posting
export async function createJob(title, company, location, salary, description) {
    const [result] = await pool.query(`
       INSERT INTO job_posting (title, company, location, salary, description)
       VALUES (?,?,?,?,?)
       `, [title, company, location, salary, description])

       const id = result.insertId
       return getJob(id);
}


//Corresponding to the 2nd point
//GET /jobs : Retreive all the job postings.
export async function getJobs() {
    const [rows] = await pool.query("SELECT * FROM job_posting");
    return rows;
}

//Corresponding to the 3rd point retrieve a single posting by ID
export async function getJob(id) {
   const [rows] = await pool.query(`
    SELECT *
    FROM job_posting
    WHERE id = ?
    `, [id])
    return rows[0]; 
}

//Corresponding to the 4th point PUT (Update a job posting by ID)
export async function updateJob(id, title, company, location, salary, description) {
    const [result] = await pool.query(
    `UPDATE job_posting SET title = ?, company = ?, location = ?, salary = ?, description = ?
    WHERE id = ?`,
    [title, company, location, salary, description, id]
    )
    return result;
}

//Corresponding to the 5th point delete a job posting by ID
export async function deleteJob(id) {
    const [result] = await pool.query(`
        DELETE FROM job_posting WHERE id = ?
        `, [id]);
        return result;
}

//const result = await updateJob('4','Software Engineeri', 'Microsoft', 'Noida, India', '2100000', 'Backend Developer role');
const result = await deleteJob(4);
console.log(result);