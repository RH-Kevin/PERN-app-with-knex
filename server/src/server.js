const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const knex = require('./index');

const PORT = process.env.PORT || 3000;

dotenv.config();


const app = express();


// Middleware
app.use(express.json());
app.use(cors());




// API Routes
app.get('/', (req,res) => {
  res.send("I am up and running!");
});

app.get('/todos', async (req, res) => {
  try {
    // Use Knex to execute the SQL query
    const todos = await knex.select('*').from('todo');
    
    // Send the result as JSON
    res.json(todos);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})