//input:arr;
//output:arr[$+numb];

function cleanTransactionsList(arr) {
    return arr.filter(elements => isFinite(elements))
        .map(elements => '$' + Number(elements).toFixed(2));
}

console.log(cleanTransactionsList([' 1.9 ', ' 16.4', 'dollar']));