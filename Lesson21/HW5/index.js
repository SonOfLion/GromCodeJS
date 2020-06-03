const setButton = (buttonText) => {
    return document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
    // return document.querySelector('body').textContent = `<button>${buttonText}</button>`;

};

// setButton('buttonText');
export { setButton };