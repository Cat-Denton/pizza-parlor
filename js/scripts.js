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

Pizza.prototype.pizzaPrice = function() {
  let price = 0;
  if (this.size === "small") {
    price += 12;
  } else if (this.size === "medium") {
    price += 15;
  } else if (this.size === "large") {
    price += 18;
  };
  return price;
}

let pizza = new Pizza("medium")
let topping1 = new Topping("pepperoni",1)
let topping2 = new Topping("bell pepper", .5)