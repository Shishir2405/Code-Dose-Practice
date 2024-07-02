/**
 * Question 3
 * Add a static method to the Book class that compares the publication year of two books 
 * and returns the older book. Test this method with instances of books.
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

    static compareYears(book1, book2) {
        if (book1.year < book2.year) {
            return book1;
        } else {
            return book2;
        }
    }
}

// Example usage:
const book1 = new Book("Book 1", "Author A", 2000);
const book2 = new Book("Book 2", "Author B", 1990);
const olderBook = Book.compareYears(book1, book2);
console.log("Older book:", olderBook.getSummary());