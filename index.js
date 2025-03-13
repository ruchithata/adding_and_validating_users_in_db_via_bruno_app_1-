const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./controller/routes');
const router = require('./controllers/routes');

const connectDB = require('./db');

// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;

const uri = "mongodb+srv://abilashamanne:abilasha@setting-up-a-db-1.jmatm.mongodb.net/?retryWrites=true&w=majority&appName=Setting-up-a-DB-1";

const uri = "mongodb+srv://ruchithata83:ruchitha@signup.9jubx.mongodb.net/?retryWrites=true&w=majority&appName=signup";


// Connect to the database
connectDB(uri);

// Use user routes
app.use('/api', router); // Prefix all user-related routes with /api/users

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});

});

