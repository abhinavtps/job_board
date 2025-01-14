import express from 'express'
import { createJob, getJobs, getJob, updateJob, deleteJob } from './database.js'

const app = express()

app.use(express.json());

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

//Middleware error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broken, please check again in sometime');
})


//route to get all the job postings
app.get('/jobs', async (req, res) => {
    const jobs = await getJobs();
    res.send(jobs);
})

//route to get a single posting by ID
app.get('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    const job = await getJob(id);
    res.send(job);
})

//route to create a new job listing
app.post('/jobs', async (req, res) => {
    const { title, company, location, salary, description } = req.body;
    const newJob = await createJob(title, company, location, salary, description);
    res.send(newJob);
})


//route to update a job listing
app.put('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    const { title, company, location, salary, description } = req.body;
    const result = await updateJob(id, title, company, location, salary, description);
    res.send(result);
})

//route to delete a job listing
app.delete('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    const result = await deleteJob(id); 
    res.send(result);
})
