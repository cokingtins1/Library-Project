
let myLibrary = []

const addBook = document.getElementById("newBook")
const submit = document.getElementById("submit")

var popUp = document.getElementById('myModal')
var span = document.getElementsByClassName("close")[0];

const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')

// constructor for Book
class Book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
}

// display pop-up for input fields, clear previous inputs from localstorage
addBook.addEventListener('click', () => {
    popUp.style.display = "block"
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""

})

let newBook
function addBookToLibrary(){
    newBook = new Book(titleInput.value, authorInput.value, pagesInput.value)
    myLibrary.push(newBook)
    popUp.style.display = "none"
    restore()
}

function render(){
    const display = document.getElementById('Library-container')
    const books = document.querySelectorAll('.book')
    books.forEach(book => display.removeChild(book))

    for(let i =0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }

}

// DOM manipulation
function createBook(item){
    const libcontainer = document.getElementById('Library-container');
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const pagesDiv = document.createElement('div')

    bookDiv.classList.add('book')
    libcontainer.append(bookDiv)
    
    titleDiv.classList.add('title')
    titleDiv.innerText = "Title: " + item.title
    bookDiv.append(titleDiv)

    authorDiv.classList.add('author')
    authorDiv.innerText = "Author: " + item.author
    bookDiv.append(authorDiv)

    pagesDiv.classList.add('pages')
    pagesDiv.innerText = "Pages: " + item.pages
    bookDiv.append(pagesDiv)
}

// stores myLibrary to local storage
function storeData(){
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary))
}


// checks is local storage contains data, gets data if true, renders data if false
function restore(){
    if(!localStorage.myLibrary){
        render()
    }else{
        let objects = localStorage.getItem('myLibrary')
        objects.JSON.parse(objects)
        myLibrary = objects
        render()
        console.log(myLibrary)
    }
}

// "submit" button functionality
submit.addEventListener('click', addBookToLibrary)


// "x" button functionality
span.onclick = function() {
    popUp.style.display = "none";
  }


