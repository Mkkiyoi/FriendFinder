// Import Node Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes');

// Construct Express App
let app = express();
const PORT = 8080;

// Express app data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

htmlRoutes.displaySurvey(app, path);
htmlRoutes.displayHome(app, path);


// Server listening
app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
});