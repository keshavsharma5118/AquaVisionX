document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Replace these credentials with real authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
});
// Initialize the map
const map = L.map('map').setView([20, 78], 5); // Centered at a point in India

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


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
