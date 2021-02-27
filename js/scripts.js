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
    total += 18;
  };

  Object.keys(this.toppings).forEach(key => {
    total += this.toppings[key].price;
  });

//  Object.keys(this.toppings).forEach(function(key) {
//     total += this.toppings[key].price
//   }); 

  return total;
};

$(document).ready(function() {
  $("form#pizzaBuilder").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza($("#size").val())
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      let toppingString = $(this).val().toString();
      const toppingArray = toppingString.split(",");
      let newTopping = new Topping(toppingArray[0],parseFloat(toppingArray[1]));
      console.log(newTopping)
      pizza.addTopping(newTopping);      
    });
    console.log(pizza)
    console.log(pizza.pizzaPrice())
    
  });
});