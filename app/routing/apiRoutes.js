let friends = require('../data/friends');

// GET route to /api/friends
let getFriends = (app) => {
    app.get('/api/friends', (request, result) => {
        result.json(friends);
    });
}


// POST route to /api/fri;ends
let addFriend = (app) => {
    app.post('/api/friends', (request, result) => {
        console.log(result)
        result.send(request.body);
    });
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend
}
