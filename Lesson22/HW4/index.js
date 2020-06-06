const button = document.querySelector('.single-use-btn');

button.addEventListener('click', () => {
    console.dir('clicked');
    button.removeEventListener('click', button);
});