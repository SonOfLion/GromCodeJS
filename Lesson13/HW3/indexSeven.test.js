import { filterNames } from './filterNames.js';

it('should check type lements of array', () => {
    const result = filterNames(['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Vanya', 'Nystya', 'ya']);
    const type = result.every((el) => typeof el === 'string')
    expect(type).toEqual(true)
});
it('should return elements array which elements length more than > 5', () => {
    const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');

    expect(result).toEqual(['Olivya', 'Nastya']);
});
it('should check array is array', () => {
    let result = filterNames(['John', 'Olivia', 'Oleksandr', 'Emanuel', 'Vanya', 'Nystya'], 'ya');
    let type = Array.isArray(result);

    expect(type).toEqual(true);
});