import throttle from 'lodash.throttle'; 

let formData = {};
const STOGAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    texterea: document.querySelector(".feedback-form textarea"),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

onPageRefresh();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(STOGAGE_KEY);
    console.log(formData);
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STOGAGE_KEY, JSON.stringify(formData));
}

function onPageRefresh() {
    const savedData = JSON.parse(localStorage.getItem(STOGAGE_KEY));

    if (savedData) {
        refs.input.value = savedData.email;
        refs.texterea.value = savedData.message;
        formData = savedData;
    }
}
