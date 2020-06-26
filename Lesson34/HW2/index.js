const baseUrl = 'https://5ef46efeac6d1e00168ca095.mockapi.io/api/v1/users';

const formInputElem = document.querySelectorAll('.form-input');
// console.log(formInputElem);
const errorTextElem = document.querySelector('.error-text');
const submitButtonElem = document.querySelector('.submit-button');
const formLoginElem = document.querySelector('.login-form');

const validate = () => {
    formLoginElem.reportValidity() ?
        submitButtonElem.disabled = false :
        submitButtonElem.disabled = true;

    errorTextElem.textContent = '';
};

formLoginElem.addEventListener('input', validate)

const postUserData = (event) => {
    event.preventDefault();

    const formData = [...new FormData(formLoginElem)]
        .reduce((acc, [input, value]) => ({...acc, [input]: value }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => {
            formInputElem.forEach(el => el.value = '')
            submitButtonElem.disabled = true;
            alert(JSON.stringify(response));
        })
        .catch(() => errorTextElem.textContent = 'Failed to create user');
};

formLoginElem.addEventListener('submit', postUserData);
// console.log(formLoginElem);
// console.log(formData);