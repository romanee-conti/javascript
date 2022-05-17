// Object Syntax

const exampleObject = {
    key : "value" , // comma for other keys
    types: "any" ,
    method() {
        // do or return smth
        // this keyword refers to the object
        return this.key + " " + this.types;
    }
}

// Accessing an object
// ".notation"

console.log(exampleObject.key)
console.log(exampleObject.types)

// calling a method

console.log(exampleObject.method())

// square brackets alternative syntax for properties not methods

console.log(exampleObject["key"])
console.log(exampleObject["types"])

// adding properties

exampleObject.newKey = "lancashire"

// display whole object

console.log(exampleObject)