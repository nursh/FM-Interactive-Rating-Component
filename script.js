const form = document.querySelector('form');

function onSubmitForm(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  
  window.localStorage.setItem('rating', data.rating);
  window.location.href = 'thank-you.html';
}

form.addEventListener('submit', onSubmitForm);