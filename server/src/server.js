const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})