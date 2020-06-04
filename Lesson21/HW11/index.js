export const squaredNumbers = () => {
    document.querySelectorAll('.number').
    forEach((elem) => {
        const mult = elem.dataset.number ** 2;
        elem.dataset.squaredNumbers = mult;
    });
};

// squaredNumbers();