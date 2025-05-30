export type  BookType = {
  bookId:number;
  title: string;
  publicationDate: string;
  author: string;
  pages: number;
  copiesAvailable: number;
};

export type MemberType = {
  memberId: string;
  name: string;
  phone: string;
  borrowedBooks: BookType[];
}

class Book {
  bookId:number;
  title: string;
  publicationDate: string;
  author: string;
  pages: number;
  copiesAvailable: number;
  constructor(bookId:number, title: string, publicationDate: string, author: string, pages: number,copiesAvailable: number,){
    this.bookId = bookId
    this.title = title;
    this.publicationDate = publicationDate;
    this.author = author;
    this.pages = pages;
    this.copiesAvailable = copiesAvailable;
  }
  getCopiesAvailable(){
    return this.copiesAvailable
  }
  addCopiesAvailable(additionalNumber:number){
    this.copiesAvailable += additionalNumber;
  }
  displayDetails(){
    console.log(`${this.title}, written by ${this.author}`)
  }
}

export class Library{
  books: BookType[];
  members: MemberType[];
  constructor(books: BookType[], members: MemberType[]){
    this.books = books;
    this.members = members;
  }
  addBook(book:BookType){
    this.books.push(book);
  }
  addMember(member:MemberType){
    this.members.push(member);
  }
  findMemberByID(memberId:string){
    return this.members.filter(member => member.memberId === memberId)
  }
  findBookById(id:number){
    return this.books.filter(book => book.bookId === id)
  }
  borrowBook(memberId:string, bookId:number){
    const member = this.findMemberByID(memberId)[0];
    const book = this.findBookById(bookId)[0];
    member.borrowedBooks.push(book);
  }
  returnBook(memberId:string, bookId:number){
     const member = this.findMemberByID(memberId)[0];
    const book = this.findBookById(bookId)[0];
    member.borrowedBooks = member.borrowedBooks.filter(book => book.bookId !== bookId);
  }
}


class Member{
  memberId: string;
  name: string;
  phone: string;
  borrowedBooks: BookType[];
  constructor(memberId: string, name: string, phone: string, borrowedBooks: Book[]){
    this.memberId = memberId;
    this.name = name;
    this.phone = phone;
    this.borrowedBooks = borrowedBooks;
  }
  getBorrowedBooks(){
    return this.borrowedBooks;
  }
  borrowBook(book:BookType){
    this.borrowedBooks.push(book);
  }
  displayDetails(){
    console.log(`Name: ${this.name}, No of Borrowed Books: ${this.borrowedBooks.length}`)
  }
}