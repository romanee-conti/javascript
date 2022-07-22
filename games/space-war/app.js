class Ship {
    constructor(shipClass, hitPoints, damagePerHit, image) {
        this.shipClass = shipClass;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
        this.image = image;
    };

    takeDamage() {
        this.hitPoints = this.hitPoints - this.damagePerHit;
    };
};

class Mothership extends Ship {
    constructor() {
        super("Mothership", 100, 9, "./mothership.png")
    }
}

class DefenceShip extends Ship {
    constructor() {
        super("Defence Ship", 80, 10, "./defender.png")
    }
}

class AttackShip extends Ship {
    constructor() {
        super("Attack Ship", 45, 12, "./invader.webp")
    }
}

const mothershipDiv = document.querySelector('[data-mothership]')
const defenceDiv = document.querySelector('[data-defence]')
const attackDiv = document.querySelector('[data-attack]')
const alienFleet = document.querySelector('[data-alien-fleet]')

let alienArr = [];

const numOfMotherships = 1;
const numOfDefenceShips = 5;
const numOfAttackShips = 8;
const totalShips = numOfMotherships + numOfDefenceShips + numOfAttackShips;

const populateAlienArray = () => {
    alienArr = [];

    for (let index = 0; index < totalShips; index++) {

        let newMothership
        let newDefenceShip
        let newAttackShip

        if (index < numOfMotherships) {
            newMothership = new Mothership()
            alienArr.push(newMothership)
        } else if (index <= numOfDefenceShips) {
            newDefenceShip = new DefenceShip()
            alienArr.push(newDefenceShip)
        } else if (index <= totalShips) {
            newAttackShip = new AttackShip()
            alienArr.push(newAttackShip)
        }
    }

    console.log(alienArr)

}

const createHTML = () => {
    alienArr.forEach(ship => {

        if (ship.shipClass === 'Mothership') {
            mothershipDiv.innerHTML += `
            <div><img src="${ship.image}" alt="${ship.shipClass}"/></div>
            `
        }

        if (ship.shipClass === 'Defence Ship') {
            defenceDiv.innerHTML += `
            <div><img src="${ship.image}" alt="${ship.shipClass}"/></div>
            `
        }

        if (ship.shipClass === 'Attack Ship') {
            attackDiv.innerHTML += `
            <div><img src="${ship.image}" alt="${ship.shipClass}"/></div>
            `
        }

    })
}

const startGame = () => {
    populateAlienArray()
    createHTML()
}

startGame()
