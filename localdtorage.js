const contactForm = document.forms[0];
const formDetails = {};

if (window.localStorage.getItem('data')) {
  const parsedData = JSON.parse(window.localStorage.getItem('data'));
  contactForm.name.value = parsedData.name;
  contactForm.email.value = parsedData.email;
  contactForm.message.value = parsedData.message;
}
function collectFormData() {
  formDetails.name = contactForm.name.value;
  formDetails.email = contactForm.email.value;
  formDetails.message = contactForm.message.value;
  window.localStorage.setItem('data', JSON.stringify(formDetails));
}
contactForm.addEventListener('change', collectFormData);