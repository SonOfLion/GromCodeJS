function finishList() {
    const firstElem = document.createElement('li');
    const fourthElem = document.createElement('li');
    const sixElem = document.createElement('li');
    const eigthElem = document.createElement('li');

    firstElem.textContent = '1';
    fourthElem.textContent = '4';
    sixElem.textContent = '6';
    eigthElem.textContent = '8';

    const list = document.querySelector('.list');
    list.append(eigthElem);
    list.prepend(firstElem);

    const spec = document.querySelector('.special');
    spec.before(fourthElem);
    spec.after(sixElem);
}

// finisList();

export { finishList };