import { calc } from './calculator.js';

it('should return addition', () => {
    let result = calc('1 + 1');

    expect(result).toEqual('1 + 1 = 2');
});

it('should return subtract', () => {
    let result = calc('2 - 1');

    expect(result).toEqual('2 - 1 = 1');
});

it('should return multiplication', () => {
    let result = calc('2 * 1');

    expect(result).toEqual('2 * 1 = 2');
});

it('should return division', () => {
    let result = calc('5 / 2');

    expect(result).toEqual('5 / 2 = 2.5');
});