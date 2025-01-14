# Description: Job Board application (Backend implementation)

# Setup :
1. Clone the git repo.
2. Add env variables
3. mysql -u root -p < db_setup.sql ---> Use this command to setup the database and some initial values
4. Install all the npm dependencies.
5. npm run dev  ---> Use this command to Run the web app.

# Tech Stack : 
Node Js(Server side JavaScript compilation), Express(server side API management), Mysql(Relational Database for Persistent storage)

# Database: jobs_db
Schema:
{  
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  company VARCHAR(150) NOT NULL,
  location VARCHAR(255),
  salary INT NOT NULL,
  description TEXT 
}
Table: job_posting 

# Routing info:
1. POST /jobs: Create a new job posting (e.g., title, company, location, salary, description).
2. GET /jobs: Retrieve all postings.
3. GET /jobs/:id: Retrieve a single posting by ID.
4. PUT /jobs/:id: Update a posting by ID.
5. DELETE /jobs/:id: Delete a posting by ID.

# Testing and validation:
1. Use Thunderclient VS code extension to check the different HTTP requests and validate the response
2. Above testing can be replicated using PostMan as well.
