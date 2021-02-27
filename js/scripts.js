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
};

$(document).ready(function() {
  $("form#pizzaBuilder").submit(function(event) {
    
    let pizza = new Pizza($("#size").val())
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      let toppingString = $(this).val().toString();
      const toppingArray = toppingString.split(",");
      let newTopping = new Topping(toppingArray[0],toppingArray[1]);
      pizza.addTopping(newTopping);      
    });
    console.log(pizza)
    event.preventDefault();
  });
});