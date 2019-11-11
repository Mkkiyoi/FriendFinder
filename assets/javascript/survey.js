let addNewFriend = function() {
    let name = $('#name').val().trim();
    let imageURL = $('#imageURL').val().trim();
    let scores = [];
    for (let i = 1; i <= 10; i++) {
        let answer = $('#question' + i).val();
        scores.push(parseInt(answer));
    }
    let newFriend = {
        name: name,
        photo: imageURL,
        scores: scores
    }
    $.post('/api/friends', newFriend).then((data) => {
        console.log(data)
        console.log('Adding new friend ' + newFriend.name);
    });
}

let getMatch = function() {
    $.get('/api/friends', (data) => {
        console.log(data)
    });
}

$(document).ready(function() {
    $('#submit').on('click', (() => {
        addNewFriend();
        getMatch();
    }));
});