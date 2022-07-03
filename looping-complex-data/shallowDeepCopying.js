// Shallow - changes if original changes

const simpleArray = [1, 2, 3]
const simpleObject = { key: 'value' }

const shallowArrayCopy = simpleArray
const shallowObjectCopy = simpleObject


// Deep Copy

// spread operator = ... creates separate copy

const deepArrayCopy = [...simpleArray]

// interacting with original array/object

simpleArray.push(4)

// console.log(shallowArrayCopy)
// console.log(deepArrayCopy)

// Nested objects - deep copies will only copy one level

const complexArray = [[1], [2], [3]];
const complexObject = { data: { key: 'value' } };

const complexArrayCopy = complexArray.map(array => [...array]);
const complexObjectCopy = {...complexObject, data: {...complexObject.data}};

complexArray[0].push(2)
complexObject.data.newKey = 'new value'

// console.log(complexArrayCopy)
// console.log(complexObjectCopy)

// to get round this you can use the map function
// or spread each layer separately
// or use JSON

// JSON

const JSONObject = JSON.stringify(complexObject)
const parsedJSON = JSON.parse(JSONObject)

console.log(JSONObject)
console.log(parsedJSON.data)

// Lodash deep copy (further reading)