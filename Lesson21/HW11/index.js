function squaredNumbers() {
    const num = document.querySelectorAll('.number');

    for (let elem of num) {
        const mult = elem.dataset.number ** 2;
        elem.dataset.squaredNumbers = mult;
    }
}

export { squaredNumbers };