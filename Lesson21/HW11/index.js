function squaredNumbers() {
    const num = document.querySelectorAll('.number');

    forEach((elem) => {
        const mult = elem.dataset.number;
        elem.dataset.squaredNumbers = mult * mult;
    });
}

export { squaredNumbers };