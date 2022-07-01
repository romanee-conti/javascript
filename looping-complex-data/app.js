const validMessage = {
    userName: 'SkimpyFish',
    content: "Skimples ma jimples!",
};

const invalidMessage = {
    userName: 'Butter Lord',
    content: 'Spread thickly, my Lord!',
    error: 91,
}

// for (let key in message) {
//     console.log(key);
//     console.log(message[key]);
// }

const isString = (messageObject) => {
    for (let key in messageObject) {
        const typeCheck = typeof messageObject[key] !== 'string'
        if (typeCheck) {
            return false;
        }
    }
    return true
};

// console.log(isString(validMessage))
// console.log(isString(invalidMessage))


const validateObjectKeys = (messageObject) => {
    const objectKeys = Object.keys(messageObject)

    const keyChecker = objectKeys.every(key => {
        const validKeys = ['userName', 'content'];
        return validKeys.includes(key);
    })
    return keyChecker
}

// console.log(validateObjectKeys(validMessage))
// console.log(validateObjectKeys(invalidMessage))

const validMessageEntries = Object.entries(validMessage)
const invalidMessageEntries = Object.entries(invalidMessage)

const validateMessageObject = (messageObject) => {
    const objectEntries = Object.entries(messageObject)

    const validation = objectEntries.every(entry => {
        const key = entry[0]
        const value = entry[1]

        const typeCheck = typeof value === 'string'
        const validKeys = ['userName', 'content']
        const keyCheck = validKeys.includes(key)

        return typeCheck && keyCheck
    })

    return validation
}

// console.log(validMessageEntries)

console.log(validateMessageObject(validMessage))
console.log(validateMessageObject(invalidMessage))

