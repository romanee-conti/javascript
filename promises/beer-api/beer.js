const beerTitle = document.querySelector('.name')
const beerTagline = document.querySelector('.tagline')
const beerDesc = document.querySelector('.desciption')
const beerAbv = document.querySelector('.abv')
const beerPairing = document.querySelector('.food-pairing')

const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(res => res.json())
        .then(json => {
            beerTitle.innerText = json[0].name
            beerTagline.innerText = `"${json[0].tagline}"`
            beerDesc.innerText = json[0].description
            beerAbv.innerText = `ABV: ${json[0].abv}%`
            beerPairing.innerText = `Pairs with: ${json[0].food_pairing[0]}`
        })

        .catch (err => console.log(err))
}

getRandomBeer()