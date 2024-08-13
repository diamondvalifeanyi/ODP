// const library = [];

// const bookTitle = document.querySelector('#booktitle').value;
// const writerName = document.querySelector('#authorName').value;
// const pages = document.querySelector('#pagesRead').value;
// const read = document.querySelector('#toggle').checked;
// const btn = document.querySelector('.addme')

// function book() {
//     this.name = bookTitle;
//     this.author = writerName;
//     this.pageNo = pages;
//     this.ifRead = read;
//     this.message = function(){
//         alert("New book addded to library");
//     }
// }

// function updateLibrary() {
//     this.update = library

//     this.addBook = function () {
//         const newBook = new book();
//         this.update.push(newBook);
//         newBook.message()
//     }
// }

// btn.addEventListener("click", () => {
//     updateLibrary();
// })

const library = [];

// Select the button element
const btn = document.querySelector('.addme');
const display = document.querySelector(".showlib");

function Book(title, author, pages, read) {
    this.name = title;
    this.author = author;
    this.pageNo = pages;
    this.ifRead = read;
    this.message = function() {
        alert(`I have read ${this.name} by ${this.author}. It has ${this.pageNo} pages.  ${this.ifRead}.`);
    };
}

function UpdateLibrary() {
    this.update = library;

    this.addBook = function(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.update.push(newBook);
        newBook.message();
    };
}


btn.addEventListener("click", () => {
    // Get the values from the input fields when the button is clicked
    const bookTitle = document.querySelector('#booktitle').value;
    const writerName = document.querySelector('#authorName').value;
    const pages = document.querySelector('#pagesRead').value;
    const read = document.querySelector('#toggle').checked; // Use .checked for checkbox

    const libraryManager = new UpdateLibrary();
    libraryManager.addBook(bookTitle, writerName, pages, read);

    // Create a new paragraph element to display the book information
    const content = document.createElement('p');
    content.classList.add("content");

    // Get the last book added to the library
    const lastBook = libraryManager.update[libraryManager.update.length - 1];

    // Format the content to display the book details
    content.textContent = `Title: ${lastBook.name}, Author: ${lastBook.author}, Pages: ${lastBook.pageNo}, Read: ${lastBook.ifRead ? 'Yes' : 'No'}`;

    // Append the content to the display area
    // const display = document.querySelector(".showlib");
    display.appendChild(content);
});

// Select the button and the holding box
const btn2 = document.querySelector('.btn2');
const holdingbox2 = document.querySelector('.holdingbox2');
const holdingbox = document.querySelector('.holdingbox');

// Add event listener to the button
btn2.addEventListener('click', () => {
    // Toggle the display property
    if (holdingbox2.style.display === 'none' || holdingbox2.style.display === '') {
        holdingbox2.style.display = 'grid'; // Change to 'block' or 'grid' based on your layout
        holdingbox.style.display = 'none';
        
    } else {
        holdingbox2.style.display = 'none';
    }
});

holdingbox2.addEventListener('click', (event) => {
    event.stopPropagation();
});

const btn3= document.querySelector('.addme2');

function Book(title, author, pages, read) {
    this.name = title;
    this.author = author;
    this.pageNo = pages;
    this.ifRead = read;
    this.message = function() {
        alert(`I have read ${this.name} by ${this.author}. It has ${this.pageNo} pages.  ${this.ifRead}.`);
    };
}

function UpdateLibrary() {
    this.update = library;

    this.addBook = function(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.update.push(newBook);
        newBook.message();
    };
}


btn3.addEventListener("click", () => {
    // Get the values from the input fields when the button is clicked
    const bookTitle = document.querySelector('#booktitle').value;
    const writerName = document.querySelector('#authorName').value;
    const pages = document.querySelector('#pagesRead').value;
    const read = document.querySelector('#toggle2').checked; // Use .checked for checkbox

    const libraryManager = new UpdateLibrary();
    libraryManager.addBook(bookTitle, writerName, pages, read);

    // Create a new paragraph element to display the book information
    const content = document.createElement('p');
    content.classList.add("content");

    // Get the last book added to the library
    const lastBook = libraryManager.update[libraryManager.update.length - 1];

    // Format the content to display the book details
    content.textContent = `Title: ${lastBook.name}, Author: ${lastBook.author}, Pages: ${lastBook.pageNo}, Read: ${lastBook.ifRead ? 'Yes' : 'No'}`;

    // Append the content to the display area
    // const display = document.querySelector(".showlib");
    display.appendChild(content);
    // holdingbox2.reset()
});




