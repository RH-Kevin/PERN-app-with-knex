const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const knex = require('./index');

const PORT = process.env.PORT || 3000;

dotenv.config();


const app = express();


// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://pern-app-with-knex-frontend.onrender.com"
}
))
app.options('*', cors())


// API Routes
app.get('/', (req,res) => {
  res.send("I am up and running!");
});


// Display all todos
app.get('/todos', async (req, res) => {
  try {
    // Use Knex to execute the SQL query
    const todos = await knex('todo').select('*');
    
    // Send the result as JSON
    res.json(todos);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Create a new todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await knex('todo').insert({description});
    res.status(201).send('Todo added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCount = await knex('todo').where({ todo_id: id }).del();
    res.status(201).send("Resource Deleted");
  } catch (error) {
    console.error(error);
  }
});


// Edit a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await knex('todo').where({ todo_id: id }).update({ description });
    //res.header("Access-Control-Allow-Origin", "*");
    res.json("Todo was edited");

  } catch (error) {
    console.error(error.message);
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})