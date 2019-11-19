// Import Node Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// Construct Express App
let app = express();
const PORT = process.env.PORT || 8080;

// Express app data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/app/public')));

htmlRoutes.displaySurvey(app, path);
htmlRoutes.displayHome(app, path);

apiRoutes.getFriends(app);
apiRoutes.addFriend(app);

// Server listening
app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
});