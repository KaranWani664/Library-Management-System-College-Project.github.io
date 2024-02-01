// Sample book and borrower data

// Sample book data
let library = [];

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    library.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} <button onclick="removeBook(${index})">Remove</button>`;
        bookList.appendChild(listItem);
    });
}

// Initial display of books
displayBooks();

function addBook() {
    const titleInput = document.getElementById('bookTitle');
    const authorInput = document.getElementById('bookAuthor');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title !== '' && author !== '') {
        const newBook = {
            title: title,
            author: author
        };

        library.push(newBook);
        displayBooks();

        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';

        closeAddBookForm();
    } else {
        alert('Please enter both title and author.');
    }
}

function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}

function showAddBookForm() {
    const addBookForm = document.getElementById('addBookForm');
    addBookForm.style.display = 'block';
}

function closeAddBookForm() {
    const addBookForm = document.getElementById('addBookForm');
    addBookForm.style.display = 'none';
}

// Sample borrower data
let borrowers = [];

function displayBorrowers() {
    const borrowerList = document.getElementById('borrowerList');
    borrowerList.innerHTML = '';

    borrowers.forEach((borrower) => {
        const listItem = document.createElement('li');
        listItem.textContent = borrower;
        borrowerList.appendChild(listItem);
    });
}

// initial display of borrowers
displayBorrowers()

function addBorrower() {
    const borrowerNameInput = document.getElementById('borrowerName');
    const borrowerName = borrowerNameInput.value.trim();

    if (borrowerName !== '') {
        borrowers.push(borrowerName);
        displayBorrowers();

        // Clear input field
        borrowerNameInput.value = '';

        closeAddBorrowerForm();
    } else {
        alert('Please enter borrower name.');
    }
}

function removeBorrower(index) {
    borrowers.splice(index, 1);
    displayBorrowers();
}

function showAddBorrowerForm() {
    const addBorrowerForm = document.getElementById('addBorrowerForm');
    addBorrowerForm.style.display = 'block';
}

function closeAddBorrowerForm() {
    const addBorrowerForm = document.getElementById('addBorrowerForm');
    addBorrowerForm.style.display = 'none';
}

function removeBorrower() {
    const removeBorrowerNameInput = document.getElementById('removeBorrowerName');
    const borrowerName = removeBorrowerNameInput.value.trim();

    if (borrowerName !== '') {
        const index = borrowers.indexOf(borrowerName);
        if (index !== -1) {
            borrowers.splice(index, 1);
            displayBorrowers();
        } else {
            alert('Borrower not found.');
        }

        // Clear input field
        removeBorrowerNameInput.value = '';

        closeRemoveBorrowerForm();
    } else {
        alert('Please enter borrower name.');
    }
}

function showRemoveBorrowerForm() {
    const removeBorrowerForm = document.getElementById('removeBorrowerForm');
    removeBorrowerForm.style.display = 'block';
}

function closeRemoveBorrowerForm() {
    const addBorrowerForm = document.getElementById('removeBorrowerForm');
    addBorrowerForm.style.display = 'none';
}


