// console.log('Start');
// console.log('Start 2');

// setTimeout(() => {
//     console.log('Prepering data...');

//     const backEndData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backEndData.modified = true;

//         console.log('Data received', backEndData)
//     }, 3000);
// }, 2000)
// console.log('Request data');

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Prepering data...');

//         const backEndData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backEndData);
//     }, 2000);
//     // reject();
// })

// .then((data) => {
//     console.log('Promise resolved', data);
// });

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     });
// };
// // sleep(2000).then(() => console.log('after 2 sec'));

// Promise.all([sleep(2000), sleep(4000)]).then(() => {
//     console.log('All promises');
// });

// Promise.race([sleep(2000), sleep(4000)]).then(() => {
//     console.log('race promises');
// });