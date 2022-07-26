class Ship {
    constructor(shipClass, hitPoints, damagePerHit, image) {
        this.shipClass = shipClass;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
        this.image = image;
        this.isHit = false;
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
const shipContainers = document.querySelectorAll('[data-ship-container]')

const fireBtn = document.querySelector('[data-fire-btn]')
const resetBtn = document.querySelectorAll('[data-reset-btn]')
const victoryMsg = document.querySelector('[data-victory-msg]')


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

        if (ship.isHit === true) {
            const shipHTML = `
            <div data-ship-container class="ship-container">
            <img class="hit" src="${ship.image}" alt="${ship.shipClass}"/>
            <ul class="stats-menu">
            <li>${ship.shipClass}</li>
            <li>HP ${ship.hitPoints}</li>
            </ul>
            <p>Hit! -${ship.damagePerHit}HP</p>
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

            ship.isHit = false;
            return
        }
        
        const shipHTML = `
        <div data-ship-container class="ship-container">
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
    randomShip.isHit = true;

    victoryChecker()
    removeDestroyedShips()
}

const victoryChecker = () => {
    if (alienArr[0].hitPoints <= 0) {
        victoryMsg.style.display = 'flex'
    }
}

const removeDestroyedShips = () => {
    alienArr = alienArr.filter(ship => ship.hitPoints > 0)
}


const startGame = () => {
    populateAlienArray()
    createHTML()
}

const resetGame = () => {
    alienArr = null
    victoryMsg.style.display = 'none'
    startGame()
}

fireBtn.addEventListener('click', () => {
    damageRandomShip()
    createHTML()
})

resetBtn.forEach(button => {
    button.addEventListener('click', () => {
        resetGame()
    })
})

startGame()

// to do:

// add something visual for when a ship gets destroyed
// is there a way of keeping the ships in position when destroyed?
// would have to target image rather than entire div