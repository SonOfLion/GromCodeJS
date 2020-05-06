function filterName(arr, text) {

    arr.filter((arrayOfLines) => {
        if (arrayOfLines.includes(text) && arrayOfLines.length > 5);
    });

    return true;
}

let namesOfPeople = ['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Vanya', 'Nystya', 'ya'];
console.log(filterName(namesOfPeople));