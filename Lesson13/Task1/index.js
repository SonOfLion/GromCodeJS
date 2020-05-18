it('17 и в Африке 17'), () => {
    expected(17).toEqual(17);
};

it('18 это Вам не 17!'), () => {
    expected(17).not.toEqual(17);
};


// input:arr of array;
// output:arr of array;
const getEvenNumbers = (numbers) =>
    numbers.filter(num => (num % 2 === 0));

it('should get onle even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 3, 4])
    expect(result).toEqual([2, 4]);
});