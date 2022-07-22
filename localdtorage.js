const contactForm = document.forms[0];
const formDetails = {};

if (window.localStorage.getItem('data')) {
  const parsedData = JSON.parse(window.localStorage.getItem('data'));
  contactForm.name.value = parsedData.name;
  contactForm.email.value = parsedData.email;
  contactForm.message.value = parsedData.message;
}
