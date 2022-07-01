const fruitObjectArray = [
    { fruit: 'apple' },
    { fruit: 'banana' },
    { fruit: 'orange' }
]

console.log(fruitObjectArray[1].fruit)

const fruitValueArray = fruitObjectArray.map(fruitObject => {
    const fruitValue = fruitObject.fruit
    return fruitValue
})

console.log(fruitValueArray)