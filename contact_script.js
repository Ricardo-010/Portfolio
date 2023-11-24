emailjs.init("HrMNbfj1m6bbLyXQ0"); // Replace with your user ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var cvRequested = document.getElementById('cv_request').checked ? 'CV requested' : 'CV not requested';

    var params = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value,
        cv_request: cvRequested
    };

    emailjs.send('service_ylcuopm', 'template_bpgzz4d', params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent!');
            window.location.href = 'Portfolio.html';
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message, please try again.');
        });
});
