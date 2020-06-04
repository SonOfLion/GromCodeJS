function squaredNumbers() {
    const num = document.querySelectorAll('.number');

    forEach((elem) => {
        const mult = elem.dataset.number ** 2;
        elem.dataset.squaredNumbers = mult;
    });
}

export { squaredNumbers };