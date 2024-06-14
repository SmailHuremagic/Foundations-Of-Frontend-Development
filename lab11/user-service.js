// services/user-service.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login_form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validate credentials (for simplicity, just check if they are not empty)
        if (username && password) {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html';
        } else {
            alert('Invalid login credentials');
        }
    });
});
