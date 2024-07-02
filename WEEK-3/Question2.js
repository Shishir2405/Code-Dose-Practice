/**
 * Question 2
 * Create a class called Magazine that extends the Book class.
 * Add a new property month and modify the getSummary method to include the month of publication.
 */
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  getSummary() {
    return `${super.getSummary()} - ${this.month}`;
  }
}
