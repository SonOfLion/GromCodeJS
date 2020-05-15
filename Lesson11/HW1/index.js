//input:string,length;
//output:arr[string>len];
function splitString(str, len = 10) {
    if (typeof str !== 'string') return null;

    let arrSubstring = [];
    let startPosition = 0;

    while (true) {
        let chunk = str.substr(startPosition, len)
        if (chunk.length === 0) {
            break;
        }
        while (chunk.length < len) {
            chunk += '.';
        }
        arrSubstring.push(chunk);
        startPosition += len;
    }
    return arrSubstring;
}

console.log(splitString('adadqweqwefFFdfqwqwe', 8));