const button = document.querySelectorAll('.pagination__page');

const clik = (event) => {
    console.log(event.target.dataset.pageNumber);
}

[...button].map(elem => elem.addEventListener('click', clik));