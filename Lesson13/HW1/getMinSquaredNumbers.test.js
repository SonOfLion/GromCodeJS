import { getMinSquaredNumbers } from './getMinSquaredNumbers.js';

it('should get min numbers of array', () => {
    const result = getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]);

    expected(result).toEqual(4);
});