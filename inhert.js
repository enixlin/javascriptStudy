var SuperClass = function() {}

SuperClass.prototype = {
    name: "super class"
}


console.log(new SuperClass().constructor);