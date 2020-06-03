function getItemsList() {
    const elementList = document.querySelectorAll('.technology');

    console.dir(elementList);
    return elementList;
}

function getItemsArray() {
    const elementsArray = Array.from(document.querySelectorAll('.tool'));

    console.dir(elementsArray);
    return elementsArray;
}

getItemsList();
getItemsArray();

export { getItemsList, getItemsArray }