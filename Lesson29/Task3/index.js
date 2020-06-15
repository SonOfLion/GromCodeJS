// const main = () => {
//     console.log('Hi');

//     setTimeout(function cb() {
//         console.log('there');
//     }, 5000);
//     console.log('JSConfEU');
// };

// main();

export const printing = () => {
    console.log(1);

    setTimeout(function() { console.log(5); }, 1000);
    console.log(2);

    setTimeout(function() { console.log(4); }, 0);

    console.log(3);
};