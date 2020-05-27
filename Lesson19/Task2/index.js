//vehicle and ship

//1. learn requirements
//2. create step by step algo (& input output for funtions) 
//3. create prototype solution
//4. testing 
//5. refactoring
//6. final solution 

//own props

//input:obj,
//output:array;
export function getOwnProps(obj) {
    const empArr = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return empArr.push(prop);
        }
    }
}

// for (let prop in ship) {
//     if (ship.hasOwnProperty(prop)) {
//         console.log(prop);
//     }
// }