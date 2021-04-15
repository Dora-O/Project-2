const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('logged in')
  // Collect login form values
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};


// Event Listener
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);





  function showdiv()
  {
    document.getElementById("welcome-box").style.visibility="visible";
  }
  setTimeout("showdiv()",1000);


  function hidediv()
  {
    document.getElementById("welcome-box").style.visibility="hidden";
  }
  setTimeout("hidediv()",13000);


  function showLogdiv()
  {
    document.getElementById("log-in-box").style.visibility="visible";
  }
  setTimeout("showLogdiv()",13300);
