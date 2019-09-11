// Import config from .env file
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const routeHandler = require('./src/routeHandler');

const app = express()

const port = 3000

// Init MongoDB Connection
var db = mongoose.connection;
db.on('error', () => {
    console.error('Error Connection to MongoDB')
});
db.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connect(process.env.mongodb_uri, {useNewUrlParser: true, authSource: 'admin', ssl: true});

app.use(routeHandler);

app.listen(port, () => console.log(`Google Flight App listening on port ${port}!`))