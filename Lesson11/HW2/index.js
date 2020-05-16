//input:str,substr;
//output: str,substr;


const countOccurrences = (str, substr) => {
    if (substr === '') return null;

    return str.split(substr).length - 1;
}


let name = '123.123.123.123';
console.log(countOccurrences(name, 2));