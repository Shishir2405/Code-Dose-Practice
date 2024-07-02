/**
 * Question 1
 * Define a class called Book with properties for title, author, and year. 
 * Add a method called getSummary that returns a string containing the title, author, and year.
 */
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
}
