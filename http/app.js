// what is a 'promise'?
// a promise has three states: pending, resolved and rejected.

// let myPromise = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// myPromise
//     .then((message) => {
//         console.log(message + ". I am in the THEN");
//     })
//     .catch((message) => {
//         console.log(message + ". I am in the CATCH");
//     })

// https://randomuser.me/api/

const personCard = document.querySelector('.person-card')
const personImg = document.querySelector('.person-img')

const getRandomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            personCard.innerText = json.results[0].name.first
            personImg.src = json.results[0].picture.large
        })
        .catch(err => console.log(err))
}

getRandomUser();