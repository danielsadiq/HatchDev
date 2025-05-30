import { members as memberList, popularBooks } from "./bookData";
import { BookType, MemberType } from "./main";

import { Library } from "./main";
const books: BookType[] = popularBooks;
const members: MemberType[] = memberList;

const MyLib = new Library([], []);

books.map(book => MyLib.addBook(book));
members.map(member => MyLib.addMember(member));

const newMember = { memberId: "M004", name: "Diana Miller", phone: "555-3456", borrowedBooks: [] }

MyLib.addMember(newMember);

MyLib.borrowBook("M004", 3);
MyLib.returnBook("M004", 3);

console.log(MyLib.members[1])