function isPositive(event) {
    const inputNumber = event.target.value;

    if (inputNumber < 0) {
        alert("Number is negative!")
    } else {
        alert("Number is positive!")
    }
}

// Days until the weekend

switch (new Date().getDay()) {
    case 6:
    case 0:
        console.log("It's already the weekend!")
        break;
    case 1:
        console.log("It's Monday. 4 days left...")
        break;
    case 2:
        console.log("It's Tuesday. 3 days left...")
        break;
    case 3:
        console.log("It's Wednesday. 2 days left...")
        break;
    case 4:
        console.log("It's Thursday. 1 day left...")
        break;
    case 5:
        console.log("It's Friday. 0 days left...")
}

// Supermarket prices
function getPrice(event) {
    const vegInput = event.target.value.toUpperCase();

    switch (vegInput) {
        case "POTATOES":
        case "CARROTS":
            alert("£0.80 per KG!")
            break;
        case "BROCOLLI":
            alert("£1.50 per KG!")
            break;
        case "CABBAGE":
            alert("£0.60 per KG!")
            break;
        case "ASPARAGUS":
            alert("£3.70 per KG!")
    }

}