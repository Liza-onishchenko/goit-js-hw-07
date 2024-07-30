const formEl = document.querySelector('.login-form')
const onFormSubmit = event => {
  event.preventDefault();

  const emailValue = formEl.elements.email.value.trim();
  const passwordlValue = formEl.elements.password.value.trim();
    
  if (emailValue === '' || passwordlValue === '') {
    alert ('All form fields must be filled in');
    return;
 }
  const formData = {
    email: emailValue,
    password: passwordlValue,
  };
  
  console.log(formData);

  formEl.reset();
};

formEl.addEventListener('submit', onFormSubmit);