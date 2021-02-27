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
  let total = 0;
  if (this.size === "small") {
    total += 12;
  } else if (this.size === "medium") {
    total += 15;
  } else if (this.size === "large") {
    price += 18;
  };
  const pizzaToppingsKeys = Object.keys(pizza.toppings);

  pizzaToppingsKeys.forEach(function(key) {
    total += pizza.toppings[key].price
  });

  return total;
}

let pizza = new Pizza("medium")
let topping1 = new Topping("pepperoni",1)
let topping2 = new Topping("bell pepper", .5)
pizza.addTopping(topping1);
pizza.addTopping(topping2);