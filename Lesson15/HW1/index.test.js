import { createCalculator } from './index.js';

it('should return sum of numbers', () => {
    let calc = createCalculator();
    calc.add(4 + 4);
    let result = calc.getMemo();

    expect(result).toEqual(8);
});