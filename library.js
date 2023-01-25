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

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = `${book.read ? 'read' : 'not read'}`;
    card.appendChild(read);

    bookDisplay.appendChild(card);
  });
}

addBookToLibrary("Dune", "Frank Herbert", 395, true);
addBookToLibrary("The Old Man and the Sea", "Ernest Hemingway", 112, true);
addBookToLibrary("Lovely Bones", "Alice Sebold", 234, false);
showBooks();
