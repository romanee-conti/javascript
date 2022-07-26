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

const mothershipDiv = document.querySelector('[data-mothership-div]')
const defenceDiv = document.querySelector('[data-defence-div]')
const attackDiv = document.querySelector('[data-attack-div]')

const fireBtn = document.querySelector('[data-fire-btn]')
const resetBtn = document.querySelector('[data-reset-btn]')


let alienArr = [];

const numOfMotherships = 1;
const numOfDefenceShips = 5;
const numOfAttackShips = 8;
const totalShips = numOfMotherships + numOfDefenceShips + numOfAttackShips;

const populateAlienArray = () => {
    alienArr = [];

    for (let index = 0; index < totalShips; index++) {

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
}

const createHTML = () => {
    mothershipDiv.innerHTML = ''
    defenceDiv.innerHTML = ''
    attackDiv.innerHTML = ''

    alienArr.forEach(ship => {
        const shipHTML = `
        <div class="ship-container">
        <img src="${ship.image}" alt="${ship.shipClass}"/>
        <ul class="stats-menu">
        <li>${ship.shipClass}</li>
        <li>HP ${ship.hitPoints}</li>
        </ul>
        </div>
        `

        if (ship.shipClass === 'Mothership') {
            mothershipDiv.innerHTML += shipHTML;
        }

        if (ship.shipClass === 'Defence Ship') {
            defenceDiv.innerHTML += shipHTML;
        }

        if (ship.shipClass === 'Attack Ship') {
            attackDiv.innerHTML += shipHTML;
        }

    })
}

const damageRandomShip = () => {
    const randomIndex = Math.floor((Math.random() * alienArr.length));
    const randomShip = alienArr[randomIndex];
    randomShip.takeDamage()
}

const startGame = () => {
    populateAlienArray()
    createHTML()
}

const resetGame = () => {
    alienArr = null
    startGame()
}


// victory checker for when mothership is destroyed
// taken damage add class / visual flag

fireBtn.addEventListener('click', () => {
    damageRandomShip()
    createHTML()
})

resetBtn.addEventListener('click', () => {
    resetGame()
})

startGame()

