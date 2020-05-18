import { getMinSquaredNumbers } from './getMinSquaredNumbers.js';

it('should get min numbers of array', () => {
    const result = getMinSquaredNumbers([13, 23, -23, 78]);

    expected(result).toEqual(4);
});