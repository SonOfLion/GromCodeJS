/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */

// export const makePromise = (value) = new Promise(resolve => {
//     resolve(value);
// });

export const makePromise = value = Promise.resolve(value);

/*
 * пример использования
 */
// makePromise(17)
//     .then(number => {
//         console.log(number); // 17
//     });