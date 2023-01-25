const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeBook(card) {
  myLibrary.splice(card.getAttribute("data-index"), 1);
  card.remove();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function renderTrashIcon(element) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  iconSvg.setAttribute("fill", "gray");
  iconSvg.setAttribute("viewBox", "0 0 24 24");
  iconSvg.setAttribute("stroke", "none");
  iconSvg.setAttribute("height", "2em");
  iconSvg.setAttribute("width", "2em");
  iconSvg.classList.add("icon");

  iconPath.setAttribute(
    "d",
    "M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z"
  );

  iconSvg.appendChild(iconPath);

  return element.appendChild(iconSvg);
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

  const removeButton = document.createElement("button");
  removeButton.setAttribute("type", "button");
  removeButton.classList.add("remove-button");
  renderTrashIcon(removeButton);
  removeButton.addEventListener("click", () =>
    removeBook(removeButton.parentElement)
  );
  card.appendChild(removeButton);

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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideForm();
  }
});

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
