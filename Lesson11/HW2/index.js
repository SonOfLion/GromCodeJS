//input:str,substr;
//output: str,substr;


const countOccurrences = (str, substr) => {
    if (substr === '') return null;

    return str.split(substr).length;
}


let name = 'JavaScript';
console.log(countOccurrences(name));