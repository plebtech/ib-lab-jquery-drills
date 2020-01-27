// wait for document to load.
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

// select button by id and alert when clicked.
$('#btnSubmit').click(function() {
    alert('Button clicked!');
});

// set button to disabled on load.
$('#btnSubmit').prop('disabled', true);

// if text field has content, enable button.
$('form :text').on('keyup', function() {
    if ($(this).val() === '') {
        $('#btnSubmit').prop('disabled', true);
    } else {
        $('#btnSubmit').prop('disabled', false);
    }
});

// when form submitted alert text field value.
$("form").submit(function(e) {
    alert($('form :text').val());
    // prevents page from reloading on submit.
    e.preventDefault();
});

$("body").append('<div></div>');

// append h2 with form text on submit.
$("form").submit(function() {
    $('body div').append(`<h2>${$('form :text').val()}</h2>`);
    listenH2();
});

// change background color on mouseover.
function listenH2() {
    $('h2').mouseover(function() {
    $(this).css("background-color", randomBg());
});
}

function randomBg() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let random = "rgb(" + r + "," + g + "," + b + ")";
    return random;
}