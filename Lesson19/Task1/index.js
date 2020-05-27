//vehicle and ship

//1. learn requirements
//2. create step by step algo (& input output for funtions) 
//3. create prototype solution
//4. testing 
//5. refactoring
//6. final solution 


export const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} is stopped`);
    }

};

export const ship = {
    name: 'Argo',
    hasWheels: false,

    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        ship.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle
};

//vihicle.move();

console.log(vehicle);
ship.move;
console.log(ship);

// [Prototype]-- getter and sette;