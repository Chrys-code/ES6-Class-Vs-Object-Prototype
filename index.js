// ES6 JavaScript

class ShoppingList {
  constructor(items, number) {
    this.items = items;
    this.number = number;
  }
  sayList() {
    console.log(
      `My list contains ${this.items} a total of ${this.number} items`
    );
  }
}

const myList = new ShoppingList(["Soya, Monster, RedBull, Vitamins"], 4);
myList.sayList();

class Product extends ShoppingList {
  constructor(items, number, amount, cost) {
    super(items, number);
    this.amount = amount;
    this.cost = cost;
  }
}

const product = new Product(["RedBull, Bread"], 2, 6, 30);
console.log(product);

///////////////////////////////////////////////////////////////////////////////

// Old JavaScript
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

Person.prototype.greet = function () {
  console.log(
    "Hello my name is " +
      this.name +
      ". I am " +
      this.age +
      " years old and " +
      this.height +
      " tall. :D"
  );
};

function Chris(name, age, height, occupation, hobbys) {
  Person.call(this, name, age, height);
  this.occupation = occupation;
  this.hobbys = hobbys;
}

var person = new Chris("Chris", 27, 192, "Dev", [
  "Watching butterflies",
  "Creating web dev projects",
]);

console.log(person);
