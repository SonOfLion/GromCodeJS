const button = document.querySelector('.search__btn');

button.addEventListener('click', () => {
    const text = document.querySelector('.search__input')
    console.log(text.value);
});