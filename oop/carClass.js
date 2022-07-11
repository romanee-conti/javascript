class Vehicle {
    constructor(engine, steering, speed) {
        this.engine = engine
        this.steering = steering
        this.speed = speed
    }
}

class Car extends Vehicle {
    constructor(engine, steering, speed, make) {
        super(engine, steering, speed)
        this.make = make
    }
}

const porsche = new Car('V8', 'manual', 250, 'porsche')

console.log(porsche);