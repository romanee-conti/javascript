class Book {
    constructor(title, author, genre, year) {
        this.title = title
        this.author = author
        this.genre = genre
        this.year = year
    }

    get summary() {
        return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}`
    }
}

const book1 = new Book("Harry Potter", "JK Rowling", "Fantasy", "2001")

console.log(book1.summary);

class Magazine extends Book {
    constructor(title, author, genre, year, length) {
        super(title, author, genre, year)
        this.length = length;
    }
}

const mag1 = new Magazine("Mag Dog's Motors", "Mad Dog", "Motorcycles", "1986", 33)

console.log(mag1.summary);

