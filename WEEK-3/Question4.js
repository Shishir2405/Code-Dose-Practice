/**
 * Question 4
 * Modify the Book class to make the year and author properties private.
 * Ensure that these properties are only modifiable through class methods (e.g., getters and setters).
 */
class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor === "string" && newAuthor.trim() !== "") {
      this._author = newAuthor;
    } else {
      throw new Error("Author must be a non-empty string");
    }
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (typeof newYear === "number" && newYear.toString().length === 4) {
      this._year = newYear;
    } else {
      throw new Error("Year must be a four-digit number");
    }
  }

  getSummary() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}
