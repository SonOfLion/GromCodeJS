export class Vehicle {
    constructor(name, numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels);
        this.maxSpeed = maxSpeed;
    }

    start() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
};

const ship1 = new Ship('Aurora', 18);

ship1.startMachine();
console.log(ship1);
ship1.move();
ship1.stop();