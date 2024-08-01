document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        // Simulate a successful login by redirecting to a welcome page
        window.location.href = 'welcome.html';
    } else {
        alert('Please enter both email and password.');
    }
});
