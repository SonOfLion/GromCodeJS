import { arrAverage } from "./arrAverage";

it('should check array on number', () => {
    const result = arrAverage([2, 5, 6, 3]);
    const type = typeof result === 'number';

    expect(type).toEqual(true);
});
it('should average number of array elements', () => {
    const result = arrAverage([2, 5, 6, 3]);

    expect(result).toEqual(4);
});
it("should return null if arr is 'string'", () => {
    const result = arrAverage('string');

    expect(result).toEqual(null);
});