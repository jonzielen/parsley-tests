$(function() {
    document.querySelector('#go').addEventListener('click', function(e) {
        e.preventDefault();

        var emailCheck = $('#email').parsley();
        console.log(emailCheck.isValid());

    });
    $('#newsletter-form').parsley();
});
