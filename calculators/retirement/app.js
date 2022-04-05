function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    const retirementAge = 65;

    if (currentAge < 0) {
        alert("INVALID AGE!")
    } else if (currentAge >= 65) {
        alert("You have already reached retirement age.")
    } else {
        alert(`You have ${Math.abs(currentAge - retirementAge)} years left until retirement.`)
    }
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "hello") {
        alert("Bonjour!")
    } else if (greeting == "goodbye") {
        alert("Au revoir!")
    } else {
        alert("Unrecognised greeting!")
    }
}