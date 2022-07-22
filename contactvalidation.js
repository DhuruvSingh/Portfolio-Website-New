const submitButton = document.getElementById('send-button');

function formSubmit(event) {
  const userName = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('msg').value;
  if (email !== email.toLowerCase()) {
    document.getElementById('error').classList.add('show-error');
  } else {
    event.preventDefault();
    const userData = JSON.stringify({
      userName,
      email,
      message,
    });
    window.localStorage.setItem('userData', userData);
    document.getElementById('contact').reset();
  }
}

submitButton.addEventListener('click', formSubmit);