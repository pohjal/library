let bookId = 0;

const cardHolder = document.getElementById("cardHolder");
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var bookName = document.getElementById("bookName").value;
  var bookLength = document.getElementById("bookLength").value;
  var bookReadElement = document.querySelector('input[name="read"]:checked');
  var bookRead = false;
  if (bookReadElement) {
    bookRead = bookReadElement.value === "yes";
  }

  var bookAuthor = document.getElementById("bookAuthor").value;
  var book = new Book(bookName, bookLength, bookRead, bookAuthor);
  addBookToLibrary(book);

  document.getElementById("bookName").value = "";
  document.getElementById("bookLength").value = "";
  document
    .querySelectorAll('input[name="read"]')
    .forEach((radio) => (radio.checked = false));
  document.getElementById("bookAuthor").value = "";
});

const myLibrary = [];

const catInAHat = new Book("Cat in a hat", 25, false, "JVG");
const demoKirja = new Book("MAOL", 205, false, "YTL");
addBookToLibrary(catInAHat);
addBookToLibrary(demoKirja);

function Book(name, length, read, author) {
  this.id = bookId++;
  this.name = name;
  this.length = length;
  this.read = read;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  createCard(book);
}

function createCard(book) {
  var card = document.createElement("div");
  card.dataset.bookId = book.id;
  var name = document.createElement("p");
  name.textContent = book.name;
  var length = document.createElement("p");
  length.textContent = "length: " + book.length;
  var luettu = document.createElement("button");
  luettu.textContent = book.read ? "Read" : "Not Read";
  luettu.addEventListener("click", function () {
    book.read = !book.read;
    luettu.textContent = book.read ? "Read" : "Not Read";
  });

  var author = document.createElement("p");
  author.textContent = book.author;
  var poista = document.createElement("button");
  poista.textContent = "Delete Book";
  poista.addEventListener("click", deleteCard);

  card.classList.add("card");
  card.appendChild(name);
  card.appendChild(length);
  card.appendChild(luettu);
  card.appendChild(author);
  card.appendChild(poista);
  cardHolder.appendChild(card);
}
function deleteCard(event) {
  var card = event.target.parentElement;
  var bookId = parseInt(card.dataset.bookId);

  var bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
  }

  card.remove();
}
