//  Create a Book Object
document.body.style.backgroundColor = "#f3f3f3";
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
            /* {
                title: 'Arta', 
                author: 'Love', 
                pages: 250, 
                read: 'Not Read'
            }, 
            {
                title: 'Nasi', 
                author: 'kindness', 
                pages: 114, 
                read: 'read'
            } */
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

    static showAlert(message, classes) {
        const div = document.createElement('div');
        div.className = `alert ${classes}`
        const text = document.createTextNode(message);
        div.appendChild(text);
        const container = document.querySelector('.container');
        const form = document.querySelector('#main-form');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), 3500);
    }


    static emptyInput() {
        document.querySelector('#main-form').reset();
    }
}
 

// Storage Tasks


// Event = Add
// document.addEventListener('DOMContentLoaded', UI.display);

document.querySelector('#main-form').addEventListener('submit', (e) => 
{
    // we prevent default action of submit button
    e.preventDefault();
    // collecting the values of the form
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    if (read === true) {
        read = "Read";
    } else {read = "Not Read"};

    // validating 
    if(title === '' || author === '' || pages === '' || read === '') {
        UI.showAlert("Please fill all the fields", "alert-danger");
    } else {
        // create an instance from object 'Book'
        const book = new Book(title, author, pages, read);

        // Now we add our instance to our Display
        UI.addBookToList(book);

        UI.showAlert("You are all set", "alert-success")

        UI.emptyInput();
    }
    
});


// Event = Remove
document.querySelector('#book-list').addEventListener('click', (e) => 
{
    UI.deletTheRow(e.target)

    UI.showAlert("Nastarn Gian You Remove a Book", "alert-success")
});