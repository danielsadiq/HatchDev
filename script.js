const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const {id, title, author} = data[0];
// console.log(id);
// console.log(title);
// console.log(author);

// Destructuring

const book = getBook(2);

const {
  id,
  title,
  author,
  pages,
  publicationDate,
  hasMovieAdaptation,
  genres,
} = book;
// console.log(author);
// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(otherGenres);

// Spread operator, very important
// const newGenres = [...genres, "epic fantasy"];
// or
const newGenres = ["romance", ...genres, "epic fantasy"];

const updatedBook = {
  ...book,
  // Adding a new property
  moviePubDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
const { moviePubDate } = updatedBook;

const sentence = `${primaryGenre} is my favourite book`;
const pagesRange = pages > 1000 ? "Over a thousande" : "less than 1000";

const getYear = (date) => date.split("-")[0];

const myYear = getYear(moviePubDate);

// and operator
// console.log(true && "Some String");
// console.log(hasMovieAdaptation && "This book has a movie");

// faslsy: 0, "", null, undefined; truthy: everything else

// or operator
// console.log(true || "Some string")
// console.log(false || "Some string")

// Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const books = getBooks();
// Map
const twice = [1, 2, 3, 4, 5].map((x) => x * 2);
const titles = books.map((x) => x.title);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

// Filter
const longBooks = books.filter((book) => book.pages > 500);
const longAndMovie = longBooks.filter((book) => book.hasMovieAdaptation);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((x) => x.title);

// Reduce
const pagesAllBooks = books.reduce(
  (acc, currentVal) => acc + parseInt(currentVal.pages),
  0
);
console.log(pagesAllBooks);
const array1 = [1, 2, 3, 4, 5];
const sum = array1.reduce((a, b) => a + b);
console.log(sum);

// Sort
const arr = [3,7,1,9,6];
const sorted = arr.slice().sort((a,b) => a-b);
console.log(sorted)
// sort is not a functional method, hence it mutates the array, to avoid this, use slice.

const sortedByPages = books.slice().sort((a,b) => a.pages - b.pages).map(book => book.pages);
console.log(sortedByPages)

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of Secrets",
  author: "J.K. Rowling"
}
const booksAfterAdd = [...books, newBook];

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 6)

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map(book => book.id ===1 ? {...book, pages:1} : book)

