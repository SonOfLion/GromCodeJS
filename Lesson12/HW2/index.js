//input:arr;
//output:arr[$+numb];

// function cleanTransactionsList(arr) {
//     return arr.filter(elements => isFinite(elements))
//         .map(elements => '$' + Number(elements).toFixed(2));
// }



const cleanTransactionsList = arr => {

    let result = arr.map(Number);
    console.log(result);
    let arrr = [];
    for (let value of result) {

        if (!Number.isNaN(value)) {
            arrr.push(`$${value.toFixed(2)}`);
        }

    }
    console.log(arrr);
    return arrr;
}
console.log(cleanTransactionsList([' 1.9 ', ' 16.4', 'dollar']));