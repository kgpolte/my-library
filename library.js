const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeBook(card) {
  myLibrary.splice(card.getAttribute("data-index"), 1);
  console.log(myLibrary);
  card.remove();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function addCard(book) {
  const bookDisplay = document.getElementById("books");

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", myLibrary.indexOf(book));

  const title = document.createElement("h3");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;
  card.appendChild(pages);

  const read = document.createElement("p");
  read.textContent = `${book.read ? "read" : "not read"}`;
  card.appendChild(read);

  const remove = document.createElement("button");
  remove.setAttribute("type", "button");
  remove.classList.add("remove-button");
  remove.textContent = "Remove";
  remove.addEventListener("click", e => removeBook(e.target.parentElement));
  card.appendChild(remove);

  bookDisplay.appendChild(card);
}

function showBooks() {
  myLibrary.forEach((book) => addCard(book));
}

function hideForm() {
  const form = document.getElementById("add-book");
  form.reset();
  document.querySelector(".form-wrapper").classList.add("hidden");
}

document.getElementById("add").addEventListener("click", () => {
  document.querySelector(".form-wrapper").classList.remove("hidden");
  document.querySelector("input").focus();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    hideForm();
  }
})

document.getElementById("cancel").addEventListener("click", () => {
  hideForm();
});

document.getElementById("submit").addEventListener("click", (e) => {
  const inputs = Array.from(document.querySelectorAll("input"));
  const invalidInputs = inputs.filter((input) => !input.validity.valid);
  if (invalidInputs.length > 0) return;

  e.preventDefault();
  addBookToLibrary(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].checked
  );

  addCard(myLibrary[myLibrary.length - 1]);
  document.getElementById("add-book").reset();
  hideForm();
});

addBookToLibrary("Dune", "Frank Herbert", 395, true);
addBookToLibrary("The Old Man and the Sea", "Ernest Hemingway", 112, true);
addBookToLibrary("Lovely Bones", "Alice Sebold", 234, false);
showBooks();
