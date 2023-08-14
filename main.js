const btnEl = document.getElementById('btn-submit'),
  emailInputEl = document.getElementById('email'),
  passwordInputEl = document.getElementById('password');

btnEl.addEventListener('click', () => {
  let emailValue = emailInputEl.value,
    passwordValue = passwordInputEl.value;

  if (emailValue && passwordValue) {
    window.location.href = 'bank.html';
  } else {
    window.location.href = 'index.html';
  }
});
