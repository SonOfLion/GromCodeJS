const button = document.querySelector('.btn');

const clik = (event) => {
    console.log(event.target.textContent);
}

[...button].map(el => el.addEventListener('click', clik));