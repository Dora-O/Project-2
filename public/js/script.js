const emailFormHandler = async (event) => {
  event.preventDefault();

  const to = document.querySelector('#email-to').value.trim();
  const subject = document.querySelector('#email-subject').value.trim();
  const content = document.querySelector('#email-content').value.trim();

  if (to && subject && content) {
    const response = await fetch('/api/emailers', {
      method: 'POST',
      body: JSON.stringify({ to, subject, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.replace('/api/emailers');
      console.log('Success')
    }
    else {
      alert ("Please make sure all fields are completed");
    }
  }
};

document
  .querySelector('.email-form')
  .addEventListener('submit', emailFormHandler);