export let filterNames = (arr, text) => arr.filter((array) => {
    if (array.includes(text) && array.length > 5) return true;
});

let namesOfPeople = ['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'ya'];
console.log(filterNames(namesOfPeople));