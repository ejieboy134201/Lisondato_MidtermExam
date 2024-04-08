document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const identifierInput = document.getElementById('identifier');
    const passwordInput = document.getElementById('password');
    const identifierError = document.getElementById('identifierError');
    const passwordError = document.getElementById('passwordError');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrors();
  
      const identifierValue = identifierInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
      if (!isValidIdentifier(identifierValue)) {
        identifierError.textContent = 'Invalid identifier. Must be at least 6 characters.';
        return;
      }
  
      if (!isValidPassword(passwordValue)) {
        passwordError.textContent = 'Invalid password. Must have at least 6 characters with one uppercase, one lowercase, one number, and one special character.';
        return;
      }
  
      // Dummy login logic, replace with actual authentication logic
      const userData = {
        username: 'user123',
        email: 'user@example.com',
        password: 'Password@123'
      };
  
      if (identifierValue === userData.username || identifierValue === userData.email) {
        if (passwordValue === userData.password) {
          message.textContent = 'Login successful! Redirecting...';
          setTimeout(function() {
            window.location.href = 'homepage.html'; // Redirect to homepage
          }, 2000);
        } else {
          message.textContent = 'Incorrect password. Please try again.';
        }
      } else {
        message.textContent = 'User not found. Please check your credentials.';
      }
    });
  
    function isValidIdentifier(identifier) {
      return identifier.length >= 6;
    }
  
    function isValidPassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      return passwordRegex.test(password);
    }
  
    function clearErrors() {
      identifierError.textContent = '';
      passwordError.textContent = '';
      message.textContent = '';
    }
  });
  