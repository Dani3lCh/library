
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

const openPopoverBtn = document.getElementById("openPopover");
const closePopoverBtn = document.getElementById("closePopover");
const popover = document.getElementById("popover");

openPopoverBtn.addEventListener("click", () => {
  popover.style.display = "block";
});

closePopoverBtn.addEventListener("click", () => {
  popover.style.display = "none";
});

// --- Lógica para agregar y mostrar libros ---
const bookForm = document.getElementById("bookForm");
const bookGrid = document.getElementById("bookGrid"); 

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  displayBooks(); 
}


function displayBooks() {
  bookGrid.innerHTML = ''; 

  if (myLibrary.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.id = 'empty-message';
    emptyMessage.textContent = 'La biblioteca está vacía. ¡Agrega un libro!';
    bookGrid.appendChild(emptyMessage);
    return;
  }

  myLibrary.forEach(book => {

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');


    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p><strong>Páginas:</strong> ${book.pages}</p>
      <p><strong>Leído:</strong> ${book.read ? 'Sí' : 'No'}</p>
    `;


    bookGrid.appendChild(bookCard);
  });
}

bookForm.addEventListener("submit", function(event) {
  event.preventDefault(); 


  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value === "yes";


  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);


  bookForm.reset();
  popover.style.display = "none";
});


displayBooks();