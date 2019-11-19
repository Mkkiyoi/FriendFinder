// Routing to home page
let displayHome = (app, path) => {
    app.get('/', (request, result) => {
        result.sendFile(path.join(__dirname, '/../public/home.html'));
    });
}

// Routing to the survey page
let displaySurvey = (app, path) => {
    app.get('/survey', (request, result) => {
        result.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
}

module.exports = {
    displayHome: displayHome,
    displaySurvey: displaySurvey
}