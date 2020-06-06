const button = document.querySelector('.single-use-btn');

const clik = () => {
    console.dir('clicked');
    button.removeEventListener('click', clik);
};

button.addEventListener('click', clik);