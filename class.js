var book = function() {
    this.name = "book";
    this.sayName = function() {
        console.log(this.name);
    }
}


var Book = function() {};
Book.prototype.sayName = function() {
    console.log(Book.prototype.name);
}

Book.prototype.say = function() {
    console.log(this.name);
}

Book.prototype = {
    //constructor: new Object(),
    go: function() {
        console.log("function go run");
    },
    sayName: function() {
        console.log("sayName function in object");
    }
}

Book.prototype.name = "Book";


var b1 = new book();
b1.name = "gi book";
b1.sayName();


var b2 = new Book();
b2.name = "gi Book";
b2.sayName();
console.log(b2);