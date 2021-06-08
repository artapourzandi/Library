//  Create a Book Object
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        /* this.info = function() {
            return (title + " by " + author + ', ' + "pages: " + pages + ', ' + read);
        } */
    }
}

// Display Tasks
class UI {
    static display() {
        const myLibrary = [
            {
                title: 'Arta', 
                author: 'Love', 
                pages: 250, 
                read: 'Not Yet'
            }, 
            {
                title: 'Nasi', 
                author: 'kindness', 
                pages: 114, 
                read: 'read'
            }
        ];

        const books = myLibrary;

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        <td><a href="#" class="btn btn-danger btn-sm delet">Delet</td>
        `;

        list.appendChild(row);
    }

    static deletTheRow(element) {
        if(element.classList.contains('delet')) {
            element.parentElement.parentElement.remove();
        }
    }

    static emptyInput() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').value = '';
    }
}
 

// Storage Tasks


// Event = Add
document.addEventListener('DOMContentLoaded', UI.display);
document.querySelector('#main-form').addEventListener('submit', (e) => 
{

    // we prevent default action of submit button
    e.preventDefault();
    // collecting the values of the form
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    // create an instance from object 'Book'
    const book = new Book(title, author, pages, read);

    // Now we add our instance to our Display
    UI.addBookToList(book);

    UI.emptyInput();
});


// Event = Remove
document.querySelector('#book-list').addEventListener('click', (e) => 
{
    UI.deletTheRow(e.target)
});