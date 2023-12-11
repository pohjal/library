const myLibrary = [];

const catInAHat = new Book("Cat in a hat", 25, false, "JVG");
catInAHat.getInfo();
const demoKirja = new Book("MAOL", 205, false, "YTL");
demoKirja.getInfo();

addBookToLibrary(catInAHat);
addBookToLibrary(demoKirja);

function Book(name, length, read, author) {
  this.name = name;
  this.length = length;
  this.read = read;
  this.author = author;
  this.getInfo = function () {
    console.log(this.name);
  };
}

function addBookToLibrary(book) {
  var pituus = myLibrary.length;
  myLibrary[pituus] = book;
}
