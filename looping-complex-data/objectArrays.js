const fruitObjectArray = [
    { fruit: 'apple', rating: 8, price: 150 },
    { fruit: 'banana', rating: 5, price: 100 },
    { fruit: 'orange', rating: 6, price: 120 },
    { fruit: 'pineapple', rating: 10, price: 300 }
]

console.log(fruitObjectArray[1].fruit)

const fruitValueArray = fruitObjectArray.map(fruitObject => {
    const fruitValue = fruitObject.fruit
    return fruitValue
})

console.log(fruitValueArray)

const searchTerm = 'apple'

const onlyApples = fruitObjectArray.filter(fruitObject => {
    const fruitMatch = fruitObject.fruit.includes(searchTerm)
    return fruitMatch
})

console.log(onlyApples)

const fruitList = ['apple', 'pear', 'banana', 'cherry', 'kiwi']

const generateHtml = (array) => {
    const arrayHtml = array.map(item => `<li>${item}</li>`)
    return arrayHtml.join('\n')
}

console.log(generateHtml(fruitList))

console.log(fruitObjectArray[2].price)

const fruitFormatter = (fruitObject) => {
    const formattedFruitObject = fruitObject.map(object =>
        object.price = `£${(object.price / 100).toFixed(2)}`
        )

        return formattedFruitObject
}

console.log(fruitFormatter(fruitObjectArray))