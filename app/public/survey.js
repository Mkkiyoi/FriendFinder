let addNewFriend = function(event) {
    event.preventDefault();
    let name = $('#name').val().trim();
    let imageURL = $('#imageURL').val().trim();
    let scores = [];
    for (let i = 1; i <= 10; i++) {
        let answer = $("input[name='questionOptions" + i + "']:checked").val();
        scores.push(answer);
    }
    let newFriend = {
        name: name,
        photo: imageURL,
        scores: scores
    }
    
    $.post('/api/friends', newFriend).then((data) => {
        $('#matchName').html(data.name);
        $('#matchPicture').attr('src', data.photo);
    });
}

let getMatch = function(event) {
    event.preventDefault();
    $.get('/api/friends', (data) => {
        console.log(data)
    });
}

$(document).ready(function() {
    $('#submit').on('click', ((event) => {
        addNewFriend(event);
        // getMatch();
        $('#matchModal').modal('show');
    }));
});