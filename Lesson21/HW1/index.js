function getTitleElement() {
    const titleElem = document.querySelector('.title');

    console.dir(titleElem);
    return titleElem;
}

function getInputElement() {
    const inputElem = document.querySelector('input[type="text"]');

    console.dir(inputElem);
    return inputElem;
}

getInputElement();
getTitleElement();

export { getInputElement, getTitleElement };