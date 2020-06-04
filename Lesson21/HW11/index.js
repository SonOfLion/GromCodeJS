export const squaredNumbers = () => {
    document.querySelectorAll(".number").forEach((elem) => {
        const squaredNumber = elem.dataset.number ** 2;
        elem.dataset.squaredNumber = squaredNumber;
    });
}

// squaredNumbers();