const cardHolder = document.getElementById("cardHolder");
const addButton = document.getElementById("addBook");
addButton.addEventListener("click", createCard);

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

function createCard() {
  var card = document.createElement("div");
  var name = document.createElement("p");
  name.textContent = "Kissa";
  var length = document.createElement("p");
  length.textContent = 300;
  var luettu = document.createElement("button");
  luettu.textContent = "Not read";
  var author = document.createElement("p");
  author.textContent = "Jvg";

  card.classList.add("card");
  card.appendChild(name);
  card.appendChild(length);
  card.appendChild(luettu);
  card.appendChild(author);
  cardHolder.appendChild(card);
}
