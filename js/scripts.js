function Pizza(size) {
  this.size = size;
  this.toppings = {};
}

function Topping(name,price) {
  this.name = name;
  this.price = price;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings[topping.name] = topping;
}

let pizza = new Pizza("medium")
let topping1 = new Topping("pepperoni",1)