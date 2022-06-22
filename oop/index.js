//Object-oriented programming in JavaScript

//There are 2 ways of declaring objects in JS,

//First one:
let obj1 = new Object()
console.log('Object 1:', obj1)

//Second one:
let obj2 = {}
console.log('Object 2:', obj2)


//We can create entired filled objects:
let obj3 = {
  name: {
    first: 'João Paulo',
    second: 'Santana',
  },
  address: 'Avenida tiradentes, 285'
}

//In OOP, an object is an instance of a Class, which defines the characteristics of an object. (we will basically use this structure to create our own algorithms)
//This is how we can declare a class (constructor)

class Book {
  constructor(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printIsBn = function() {
      console.log(this.isbn)
    }
  }
}

//and to instanciate (use) this class we can do like:

let book = new Book('title', 'pag', 'isbn')

//we can access the properties of the book and update them as we like:

console.log(book.title)
book.title = 'new book title'
console.log(book.title)
book.printIsBn()

//a class generally contains functions, also reffered as methods.

Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();
