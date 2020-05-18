export function getMinSquaredNumbers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return Math.min(...arr.map(num => Math.pow(Math.abs(num), 2)));
}