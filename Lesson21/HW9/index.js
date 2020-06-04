const finishForm = () => {
    const passInp = document.querySelector('input[type="text"]');
    passInp.type = 'password';

    const logInp = document.createElement('input');
    logInp.type = 'text';
    logInp.name = 'login';

    const form = document.querySelector('.login-form');
    form.prepend(logInp);
};

// finishForm();

export { finishForm };