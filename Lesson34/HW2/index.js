const baseUrl = 'https://5ef46efeac6d1e00168ca095.mockapi.io/api/v1/users';

const formInput = document.querySelectorAll('.form-input');
const errorText = document.querySelector('.error-text');
const submitButton = document.querySelector('.submit-button');
const formLogin = document.querySelector('.login-form');
errorText.textContent = '';

const validData = () => {
    formLogin.reportValidity() ? submitButton.disable = false : submitButton.disable = true;
};

const sendDataForm = event => {
    event.preventDefault();

    const dataOfUsers = [...new FormData(formLogin)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataOfUsers),
    })

    .then(response => response.json())
        .then(userData => {
            formInput.map(elem => elem.value = '');
            submitButton.disabled = true;
            alert(JSON.stringify(userData));
        })

    .catch(() => errorText.textContent = 'Failed to create user')
}