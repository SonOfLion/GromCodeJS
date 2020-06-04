function squaredNumbers() {
    const num = document.querySelectorAll('.number');

    for (let elem of num) {
        const mult = elem.dataset.number * elem.dataset.number;
        elem.dataset.squaredNumbers = mult;
    }
}

export { squaredNumbers };