function squaredNumbers() {
    const num = document.querySelectorAll('.number');

    for (let elem of num) {
        const mult = elem * elem;
        elem.dataset.squaredNumbers = mult;
    }
}

export { squaredNumbers };