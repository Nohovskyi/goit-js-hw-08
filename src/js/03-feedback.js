import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onTextInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

const userMessage = {
  email: '',
  message: '',
};

onFeedbackInput();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(userMessage);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextInput(evt) {
  const value = evt.target.value;

  userMessage.email = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userMessage));
}

function onTextareaInput(evt) {
  const value = evt.target.value;

  userMessage.message = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userMessage));
}

function onFeedbackInput() {
  const savedInput = localStorage.getItem('feedback-form-state');
  if (savedInput) {
    refs.input.value = JSON.parse(savedInput).email;
    refs.textarea.value = JSON.parse(savedInput).message;
  }
}
