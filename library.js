const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function showBooks() {
  const bookDisplay = document.getElementById("books");

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

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

    bookDisplay.appendChild(card);
  });
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", (e) => {
  if (document.querySelector(".form-wrapper")) {
    return;
  }

  const formWrapper = document.createElement("div");
  formWrapper.classList.add("form-wrapper");

  const form = document.createElement("form");

  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Book Details";
  fieldset.appendChild(legend);

  const formInputs = document.createElement("ul");
  formInputs.classList.add("form-inputs");

  const titleGroup = document.createElement("li");
  titleGroup.classList.add("input-group");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("required", true);
  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);
  formInputs.appendChild(titleGroup);

  const authorGroup = document.createElement("li");
  authorGroup.classList.add("input-group");
  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author");
  authorLabel.textContent = "Author";
  const authorInput = document.createElement("input");
  authorInput.setAttribute("id", "author");
  authorInput.setAttribute("name", "author");
  authorInput.setAttribute("required", true);
  authorGroup.appendChild(authorLabel);
  authorGroup.appendChild(authorInput);
  formInputs.appendChild(authorGroup);

  const pagesGroup = document.createElement("li");
  pagesGroup.classList.add("input-group");
  const pagesLabel = document.createElement("label");
  pagesLabel.setAttribute("for", "pages");
  pagesLabel.textContent = "Pages";
  const pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "number");
  pagesInput.setAttribute("id", "pages");
  pagesInput.setAttribute("name", "pages");
  pagesInput.setAttribute("required", true);
  pagesGroup.appendChild(pagesLabel);
  pagesGroup.appendChild(pagesInput);
  formInputs.appendChild(pagesGroup);

  fieldset.appendChild(formInputs);
  form.appendChild(fieldset);



  const submitButton = document.createElement("button");
  submitButton.textContent = "Add";
  form.appendChild(submitButton);

  formWrapper.appendChild(form);
  document.getElementById("main").appendChild(formWrapper);
});

addBookToLibrary("Dune", "Frank Herbert", 395, true);
addBookToLibrary("The Old Man and the Sea", "Ernest Hemingway", 112, true);
addBookToLibrary("Lovely Bones", "Alice Sebold", 234, false);
showBooks();
