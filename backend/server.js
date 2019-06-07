// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// set up middleware
app.use(cors());
app.use(bodyParser.json());

// connect to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
    .catch((err) => {
        console.log(`Connection to MongoDB failed. Error: ${err}`)
    });
mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// set up routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// start up server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
