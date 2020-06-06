# ES6-Class-Vs-Object-Prototype
Object Oriented JavaScript: ES6 Class Vs Object Prototype 

This is a short comparison between the ES6 Object-Oriented JavaScript and the Old Object Prototype JavaScript.

ES6:
- Inside a Class there is a constructor
- Class functions declared within the Class
- Back qutoes makes referencing easy and fluid since back quotes allows us using variables in ${}.
- Inheritance uses the "extends" keyword
- Parent class properties declared with the "super" class within the child class constructor



Old:
- Class created as a function with properties
- Class functions declared outside of the class brackets.
- Class referenced as Classname.prototype
- Double quotes requires "+" signs between variables and double quotes around strings
- Inheritance using a parentClass.call in childClass.

Hoisting: 
- Function declarations are hoisted, while class declarations are not.
- Class declaration required before acessing it, otherwise cause ReferneceError.
