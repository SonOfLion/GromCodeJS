function createButton(buttonText) {
    const but = document.createElement('button');
    but.textContent = `${buttonText}`;
    const body = document.querySelector('body');

    return body.append(but);
}

// createButton('Send Email');

export { createButton };