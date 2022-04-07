// Takes 4 arguments: num of children, partner's name, geographic location, job title. 
// Outputs statement to the console: "I am currently a X living in Y, and married to Z with N kids."

function getDescription(userJobTitle, userLocation, userPartner, userNumOfKids) {
    console.log(`I am currently a ${userJobTitle} living in ${userLocation}, and married to ${userPartner} with ${userNumOfKids} kids.`)
}

getDescription("hairdresser", "Swansea", "Owen", 5);

// Lifetime supply of snickers
// Write a function which takes 2 arguments: age & amt per day.
// calculates amt consumed for rest of life, with max age a constant.
// Outputs to console "You will need X to last you until the age of Y"
// Bonus: accepts a float, rounds final number to whole number.

function calculateSupply(currentAge, amountPerDay) {
    const maxAge = 80;
    const daysRemaining = (maxAge - currentAge) * 365;
    const amountPerLifetime = Math.round(daysRemaining * amountPerDay)
    console.log(`You will need ${amountPerLifetime} Snickers to last you until the age of ${maxAge}.`);
}

calculateSupply(78, 3.3);