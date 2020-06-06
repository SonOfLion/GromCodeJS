const text = document.querySelector('.text-input');

const input = (event) => {
    console.log(event.target.value);
}

text.addEventListener('change', input);