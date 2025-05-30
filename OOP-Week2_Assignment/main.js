"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Book {
    constructor(bookId, title, publicationDate, author, pages, copiesAvailable) {
        this.bookId = bookId;
        this.title = title;
        this.publicationDate = publicationDate;
        this.author = author;
        this.pages = pages;
        this.copiesAvailable = copiesAvailable;
    }
    getCopiesAvailable() {
        return this.copiesAvailable;
    }
    addCopiesAvailable(additionalNumber) {
        this.copiesAvailable += additionalNumber;
    }
    displayDetails() {
        console.log(`${this.title}, written by ${this.author}`);
    }
}
class Library {
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    findMemberByID(memberId) {
        return this.members.filter(member => member.memberId === memberId);
    }
    findBookById(id) {
        return this.books.filter(book => book.bookId === id);
    }
    borrowBook(memberId, bookId) {
        const member = this.findMemberByID(memberId)[0];
        const book = this.findBookById(bookId)[0];
        member.borrowedBooks.push(book);
    }
    returnBook(memberId, bookId) {
        const member = this.findMemberByID(memberId)[0];
        const book = this.findBookById(bookId)[0];
        member.borrowedBooks = member.borrowedBooks.filter(book => book.bookId !== bookId);
    }
}
exports.Library = Library;
class Member {
    constructor(memberId, name, phone, borrowedBooks) {
        this.memberId = memberId;
        this.name = name;
        this.phone = phone;
        this.borrowedBooks = borrowedBooks;
    }
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    displayDetails() {
        console.log(`Name: ${this.name}, No of Borrowed Books: ${this.borrowedBooks.length}`);
    }
}
