// // Object Syntax

// const exampleObject = {
//     key: "value", // comma for other keys
//     types: "any",
//     method() {
//         // do or return smth
//         // this keyword refers to the object
//         return this.key + " " + this.types;
//     }
// }

// // Accessing an object
// // ".notation"

// console.log(exampleObject.key)
// console.log(exampleObject.types)

// // calling a method

// console.log(exampleObject.method())

// // square brackets alternative syntax for properties not methods

// console.log(exampleObject["key"])
// console.log(exampleObject["types"])

// // adding properties

// exampleObject.newKey = "lancashire"

// // display whole object

// console.log(exampleObject)

// CODE ALONG START >>>>>>>>>>>

// const studentContainer = document.querySelector(".students-container");

const person = {
    firstName: "Chad",
    lastName: "Peterson",
    quote: "Can't touch this!",
    skills: ["html", "css", "javascript"],
    imgURL: "https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg?w=590&h=800&92AD8A57-5046-4AC2-B2480CC9628B1F2E",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`);
        return skillsHTML.join("\n");
    },
    getPersonHTML() {
        const personHTML = `
        <article class="student-card">
        <img src=${this.imgURL}/>
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        </article>
        `
        return personHTML;
    }
}

// console.log(person.getSkillsHTML())

// for (let index = 0; index < 10; index++) {
//     studentContainer.innerHTML += person.getPersonHTML();
// }

// CLASS SYNTAX

// PascalCase -> naming convention for all classes

class ExampleClass {
    constructor(firstName, lastName, age) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.age = age)
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

// CLASS INHERITANCE SYNTAX 

class ExtendedClass extends ExampleClass {
    constructor(firstName, lastName, age, subject) {
        super(firstName, lastName, age),
            this.subject = subject;
    }

    greet() {
        return `Hullo I am Mr ${this.lastName} and I teach ${this.subject}.`;
    }
}

const extendedExample = new ExtendedClass("Mick", "Riley", 54, "Maths");
console.log(extendedExample.greet());
console.log(new ExtendedClass("Fiona", "Ballsmatease", 33, "Biology"));


// const exampleOne = new ExampleClass("Dirk", "Lewd-Eye", 36);
// const exampleTwo = new ExampleClass("Randy", "Rooster", 22);

// console.log(exampleOne.greet());
// console.log(exampleTwo.greet());

// Convert "person" object into a reusable class

class Person {
    constructor(firstName, lastName, quote, skills, imgURL) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.quote = quote,
            this.skills = skills,
            this.imgURL = imgURL
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        return skillsHTML.join("\n");
    }

    getPersonHTML() {
        const personHTML = `
        <article class="student-card">
        <img src=${this.imgURL}/>
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        </article>
        `
        return personHTML;
    }
}

class PremiumProfile extends Person {
    constructor(firstName, lastName, quote, skills, imgURL, contactLink) {
        super(firstName, lastName, quote, skills, imgURL);
        this.contactLink = contactLink;
    }

    getPersonHTML() {
        const personHTML = `
        <article class="student-card">
        <img src=${this.imgURL}/>
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        <a href=${this.contactLink}>Let's get in touch!</a>
        </article>
        `
        return personHTML;
    }
}

const chinny = new Person(
    "Old Man",
    "Chinny",
    "Chin you later!",
    ["chins", "chinny", "chin"],
    "https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg?w=590&h=800&92AD8A57-5046-4AC2-B2480CC9628B1F2E");

const bigDan = new PremiumProfile(
    "Big Dan",
    "T",
    "Time to take out the competition",
    ["eyeballing", "cardsharking", "pistols at dawn"],
    "https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg?w=590&h=800&92AD8A57-5046-4AC2-B2480CC9628B1F2E",
    "https://www.google.co.uk/");

const murphy = new Person(
    "Murph",
    "Murphy",
    "You just got refracted",
    ["maths", "refractions", "irish dancing"],
    "https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg?w=590&h=800&92AD8A57-5046-4AC2-B2480CC9628B1F2E");


const studentContainer = document.querySelector(".students-container");

studentContainer.innerHTML += bigDan.getPersonHTML();
studentContainer.innerHTML += chinny.getPersonHTML();
studentContainer.innerHTML += murphy.getPersonHTML();