// // Object Syntax

// const exampleObject = {
//     key : "value" , // comma for other keys
//     types: "any" ,
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

const studentContainer = document.querySelector(".students-container");

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

console.log(person.getSkillsHTML())

for(let index = 0; index < 10; index ++) {
    studentContainer.innerHTML += person.getPersonHTML();
}

