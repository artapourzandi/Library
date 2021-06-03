let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + " by " + author + ', ' + "pages: " + pages + ', ' + read);
    }
}


// const book1 = new Book('\" The Habits', 'J K Rolling', 400, 'not read yet \"');


let values = [];

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    let book2 = new Book(title, author, pages, read);
    
    // values = [title, author, pages, read];

    myLibrary = myLibrary.concat(book2);

    let btnClear = document.querySelector('button');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '')
    })
}




for (var i = 0; i < myLibrary.length; i++) {
    console.table(myLibrary[i]);
}










// console.log(book1.info());
