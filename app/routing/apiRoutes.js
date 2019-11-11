// Import Node dependencies
const fs = require('fs');

// GET route to /api/friends
let getFriends = (app) => {
    app.get('/api/friends', (request, result) => {
        fs.readFile('../data/friends.js', (error, data) => {
            if (error) throw error;
            let friends = JSON.parse(data);
            return result.json(friends);
        });
    });
}


// POST route to /api/friends
let addFriend = (app) => {
    app.post('/api/friends', (request, result) => {
        let newFriend = req.body;
        fs.appendFile('../data/friends.js', newFriend, (error) => {
            if (error) throw error;
        });
    });
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend
}
