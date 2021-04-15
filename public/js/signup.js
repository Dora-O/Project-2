const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect sign up form values
  const name = document.querySelector('#name-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('success')
    } else {
      alert("Please make sure your password is at least 8 characters long");
    }
  }
};

// Event Listener
document
  .querySelector('.login-card')
  .addEventListener('submit', signupFormHandler);

