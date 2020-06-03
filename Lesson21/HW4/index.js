const setTitle = (text) => {
    return document.querySelector('.title').textContent = `${text}`;
};

// setTitle('hello');

export { setTitle };