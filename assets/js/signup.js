// Validate form inputs
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('username-error').textContent = 'Username is required.';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        valid = false;
    }

    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        valid = false;
    }

    if (valid) {
        alert('Form successfully submitted!');
        // You can proceed with form submission if necessary:
        // this.submit();
    }
});