let validateForm = (name, imageURL, scores) => {
    let valid = true;    
    if (name === '') {
        let errorDiv = $('div').addClass('alert alert-danger').text('Name is required.');
        $('#name-group').append(errorDiv);
        valid = false;
        console.log("There was an error with name")
    }
    if (imageURL === '') {
        let errorDiv = $('div').addClass('alert alert-danger').text('Valid URL to a photo is required.');
        $('#photo-group').prepend(errorDiv);
        valid = false;
    }
    if (scores.includes('')) {
        let errorDiv = $('div').addClass('alert alert-danger').text('All survey questions must be answered.');
        $('#survey-group').prepend(errorDiv);
        valid = false;
    }
    return valid;
}

let addNewFriend = function() {
    console.log("something")
    let name = $('#name').val().trim();
    let imageURL = $('#imageURL').val().trim();
    let scores = [];
    for (let i = 1; i <= 10; i++) {
        let answer = $("input[name='questionOptions" + i + "']:checked").val();
        scores.push(answer);
    }
    let valid = validateForm(name, imageURL, scores);
    if (valid) {
        let newFriend = {
            name: name,
            photo: imageURL,
            scores: scores
        }
        $.post('/api/friends', newFriend).then((data) => {
            $('#matchName').html(data.name);
            $('#matchPicture').attr('src', data.photo);
        });
        $('#matchModal').modal('show');
    }
    return valid;
}

$(document).ready(function() {
    $('#submit').on('submit', (event) => {
        event.preventDefault();
        return false;
    });
    $('#submit').on('click', (event) => {
        event.preventDefault();
        return addNewFriend();
    });
});