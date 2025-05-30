class Publication {
  id: number;
  name: string;
  writer: string;
  isCheckedOut: boolean;

  constructor(id: number, name: string, writer: string) {
    this.id = id;
    this.name = name;
    this.writer = writer;
    this.isCheckedOut = false;
  }

  takeOut(): void {
    this.isCheckedOut = true;
    console.log(`Checked out: ${this.name}`);
  }

  bringBack(): void {
    this.isCheckedOut = false;
    console.log(`Returned: ${this.name}`);
  }
}

class User {
  userId: number;
  first: string;
  last: string;

  constructor(userId: number, first: string, last: string) {
    this.userId = userId;
    this.first = first;
    this.last = last;
  }
}

class BookShelf {
  libraryItems: Publication[] = [];
  users: User[] = [];


  insertBook(name: string, writer: string): void {
    const newItem = new Publication(this.libraryItems.length + 1, name, writer);
    this.libraryItems.push(newItem);
    console.log(`New book added: ${name} by ${writer}`);
  }

  deleteBook(id: number): void {
    this.libraryItems = this.libraryItems.filter(item => item.id !== id);
    console.log(`Book with ID ${id} deleted`);
  }

  showAvailableBooks(): void {
    console.log("Books in Shelf:");
    for (let i = 0; i < this.libraryItems.length; i++) {
      if (!this.libraryItems[i].isCheckedOut) {
        console.log(`${this.libraryItems[i].id}. ${this.libraryItems[i].name} by ${this.libraryItems[i].writer}`);
      }
    }
  }

  showTakenBooks(): void {
    console.log("Books Checked Out:");
    for (let i = 0; i < this.libraryItems.length; i++) {
      if (this.libraryItems[i].isCheckedOut) {
        console.log(`${this.libraryItems[i].id}. ${this.libraryItems[i].name} by ${this.libraryItems[i].writer}`);
      }
    }
  }


  addUser(first: string, last: string): void {
    const newUser = new User(this.users.length + 1, first, last);
    this.users.push(newUser);
    console.log(`New user: ${first} ${last}`);
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.userId !== userId);
    console.log(`${User} with ID ${userId} deleted`);
  }

  showUsers(): void {
    if (this.users.length === 0) {
      console.log("No users found.");
    } else {
      console.log("Registered Users:");
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        console.log(`${user.userId}. ${user.first} ${user.last}`);
      }
    }
  }


  takeBook(id: number): void {
    const item = this.libraryItems.find(book => book.id === id);
    if (!item) {
      console.log("Book not found");
    } else if (!item.isCheckedOut) {
      item.takeOut();
    } else {
      console.log(`${item.name} is already taken`);
    }
  }

  giveBackBook(id: number): void {
    const item = this.libraryItems.find(book => book.id === id);
    if (!item) {
      console.log("Book not found");
    } else if (item.isCheckedOut) {
      item.bringBack();
    } else {
      console.log(`${item.name} is not checked out`);
    }
  }
}



let unilagLibrary = new BookShelf();

unilagLibrary.insertBook("Deep Work", "Cal Newport");
unilagLibrary.insertBook("Born a Crime", "Trevor Noah");
unilagLibrary.insertBook("Half of a Yellow Sun", "Chimamanda Ngozi Adichie");
console.log();

unilagLibrary.addUser("Ryan", "Gosling");
unilagLibrary.addUser("Daniel", "Sadiq");
unilagLibrary.addUser("Bola", "Tinubu");
console.log();

unilagLibrary.showAvailableBooks();

unilagLibrary.takeBook(1);

unilagLibrary.showAvailableBooks();

unilagLibrary.giveBackBook(1);

unilagLibrary.deleteBook(2);

unilagLibrary.deleteUser(1);

unilagLibrary.showUsers();