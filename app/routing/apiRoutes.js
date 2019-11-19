var friends = require('../data/friends.js');

// GET route to /api/friends
let getFriends = (app) => {
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    });
}

let calculateTotalDifference = (userScores, friendScores) => {
    let totalDifference = 0;
    for (let i = 0; i < 10; i++) {
        totalDifference += Math.abs(userScores[i] - friendScores[i]);
    }
    return totalDifference;
}

// POST route to /api/fri;ends
let addFriend = (app) => {
    app.post('/api/friends', (request, result) => {
        let currentUserScores = request.body.scores;
        currentUserScores.forEach((score) => {
            score = parseInt(score);
        });
        let distances = [];
        friends.forEach((friend) => {
            distances.push(calculateTotalDifference(currentUserScores, friend.scores));
        });
        let matchIndex = 0;
        let minDifference = distances[0];
        for (let i = 0; i < 10; i++) {
            if (minDifference > distances[i]) {
                minDifference = distances[i]
                matchIndex = i;
            }
        }
        result.json(friends[matchIndex]);
        friends.push(request.body);
        result.end();
    });
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend
}
