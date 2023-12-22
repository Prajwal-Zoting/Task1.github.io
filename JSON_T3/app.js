function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username format (email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain an uppercase letter, a number, and only @ as a special character.');
        return;
    }

    // Check for specific password to redirect to the dashboard
    if (password === 'SmartServTest@123') {
        alert('Login successful! Redirecting to the dashboard...');
        // Here you can redirect to the dashboard page or load its content dynamically.
        window.location.href = 'DashBoard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
