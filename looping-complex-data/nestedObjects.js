const user = {
    id: 'turquoise_shark',
    loggedIn: true,
    userDetails: {
        firstName: 'Fanny',
        lastName: 'Perkins',
        age: 22
    },
    contact: {
        email: 'fannyp@gmail.com',
        contactNumber: '07809809809',
        address: {
            houseNumber: 12,
            roadName: 'Boffins Square',
            postCode: "LN2 4SW",
            country: 'UK'
        },
    },
    likes: ['sausages', 'salami', 'bratwurst', 'currywurst', 'chipalatas']
}

// how to drill into nested objects

console.log(user.contact.contactNumber)
console.log(user.userDetails.age)
console.log(user.contact.address.country)
console.log(user.contact)

// arrays in nested objects

console.log(user.likes[4])