let library = [];

function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Initialize to false by default
}

function addBook(id, title, author) {
    const book = new Book(id, title, author);
    library.push(book);
}

function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (!book.isBorrowed) {
            book.isBorrowed = true;
            console.log("Book borrowed successfully!");
        } else {
            console.log("Book is not available.");
        }
    } else {
        console.log("Book not found.");
    }
}

function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        book.isBorrowed = false;
        console.log("Book returned successfully!");
    } else {
        console.log("Book not found.");
    }
}

function listAvailableBooks() {
    const availableBooks = library.filter(book => !book.isBorrowed);
    console.log("Available Books:");
    availableBooks.forEach(book => console.log(book.title));
}

function searchBook(title) {
    const foundBooks = library.filter(book => book.title === title);
    if (foundBooks.length > 0) {
        console.log("Book found at index:", library.indexOf(foundBooks[0]));
    } else {
        console.log("Book not found.");
    }
}

// Adding books
addBook(1001, "Making India Awesome", "Chetan Bhagat");
addBook(1002, "One Indian Girl", "Chetan Bhagat");
addBook(1003, "A River Sutra", "Gita Mehta");

// Example usage
borrowBook(1001); // Borrowing a book
listAvailableBooks(); // Listing available books
returnBook(1001); // Returning a book
listAvailableBooks(); // Listing available books
searchBook("One Indian Girl");