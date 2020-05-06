function filterNames(arr, text) {

    arr.filter((array) => {
        if (array.includes(text) && array.length > 5);
        return true;
    });
}

let namesOfPeople = ['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Vanya', 'Nystya', 'ya'];
console.log(filterName(namesOfPeople));