const alienFleet = document.querySelectorAll('[data-alien-ship]')
const mothership = document.querySelector('[data-mothership')
const defenceShips = document.querySelectorAll('[data-defence-ship]')
const attackShips = document.querySelectorAll('[data-attack-ship]')

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

class MotherShip extends Ship {
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


    function newGame () {
        const defenceShipArr = [...defenceShips]
        const attackShipArr = [...attackShips]

        mothership.innerHTML += `
        <ul class="stats-menu hide">
            <li>${mothershipObj.class}</li>
            <li>HP: ${mothershipObj.currentHP}/${mothershipObj.maxHP} </li>
        </ul >`

        defenceShipArr.map(ship => {
            ship.innerHTML += `
            <ul class="stats-menu hide">
            <li>${defenceShipObj.class}</li>
            <li>HP: ${defenceShipObj.currentHP}/${defenceShipObj.maxHP} </li>
        </ul >`
        })

        attackShipArr.map(ship => {
            ship.innerHTML += `
            <ul class="stats-menu hide">
            <li>${attackShipObj.class}</li>
            <li>HP: ${attackShipObj.currentHP}/${attackShipObj.maxHP} </li>
        </ul >`
        })
    }

    function toggleMenu(e) {
        const currentShip = e.target
        currentShip.children[1].classList.remove('hide')
        
    }

    function destroyed(ship) {
        ship.firstElementChild.style.display = 'none'
        ship.innerText = "Destroyed"
    }

newGame()

alienFleet.addEventListener('mouseover', toggleMenu)

// mothership.addEventListener('mouseover', () => {
   
// })
