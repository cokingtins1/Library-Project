
let myLibrary = []

const addBook = document.getElementById("newBook")
const submit = document.getElementById("submit")


var popUp = document.getElementById('myModal')
var span = document.getElementsByClassName("close")[0];


var out1 = document.getElementById('output1')

const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')

class Book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
}

addBook.addEventListener('click', () => {
    popUp.style.display = "block"
})

let newBook
function addBookToLibrary(){
    newBook = new Book(titleInput.value, authorInput.value, pagesInput.value)
    // myLibrary.push(JSON.stringify(newBook))
    myLibrary.push(newBook)
    // out1.innerHTML = myLibrary[0].title
    console.log(newBook.title)
    popUp.style.display = "none"

    for(let i =0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }

    const libcontainer = document.getElementById('Library-container');
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')

    bookDiv.classList.add('Book')
    libcontainer.append(bookDiv)
    
    titleDiv.classList.add('title')
    titleDiv.innerText = myLibrary[0].title
    bookDiv.append(titleDiv)


}

function createBook(item){
    // const library = document.querySelector('#Library-container');
    const libcontainer = document.getElementById('Library-container');
    const library = document.createElement('div')
    const bookDiv = document.createElement('div');

    libcontainer.append(library)
    // library.classList.add('Library-container')
    // bookDiv.classList.add('book')
    // bookDiv.setAttribute('id', myLibrary.indexOf(item))

    

}

submit.addEventListener('click', addBookToLibrary)


span.onclick = function() {
    popUp.style.display = "none";
  }

// function Player(name, marker){
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//         console.log("hello" + name)
//     }
// }

// const player1 = new Player("sean", "x")


// function Book(title, author, pages){
//     this.title = title
//     this.author = author
//     this.pages = pages

//     this.info = function() {
//         // return (this.title + " by " + ${this.author} + " has " + this.pages + " pages.")

//         return (`${this.title} is a book`)
//     }
// }

// const book1 = new Book("The Hobbit", "J.R.R Tolkien", "295")

// console.log(book1.info())



// for (var i = 0; i < newBook.length; i++) {
//     var button = newBook[i]
//     newBook.addEventListener('click', function (e) {
//         console.log('clicked')

//     });

// }