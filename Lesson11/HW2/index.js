//input:str,substr;
//output: str,substr;


const countOccurrences = (str, substr) => {
    if (substr === '') return null;

    return substr.includes(str);
}