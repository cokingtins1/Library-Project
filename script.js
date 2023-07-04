const addBook = document.getElementById("newBook")
const submit = document.getElementById("submit")


var popUp = document.getElementById('myModal')
var span = document.getElementsByClassName("close")[0];


var out1 = document.getElementById('output1')

const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')


let myLibrary = []
let newBook

class NewBook{
    constructor(titleInput, authorInput, pagesInput){
        this.title = titleInput
        this.author = authorInput
        this.pages = pagesInput
    }

    appendLib(){
        myLibrary = this.title.value + this.author.value + this.pages.value 

    }

}

const book = new NewBook(titleInput, authorInput, pagesInput)

addBook.addEventListener('click', () => {
    popUp.style.display = "block"
})


submit.addEventListener('click', () =>{
    book.appendLib()
    out1.innerHTML = myLibrary
    popUp.style.display = "none"
})



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