# _Pizza Parlor_

#### _Takes a pizza order for a hypothetical customer. Website created for practice with Javascript objects and prototypes._

#### By _**Cat Denton**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Jquery_
* _Bootstrap_

## Tests

Describe Pizza(size)  
Test: "It should create a Pizza object with size and empty toppings properties."  
Expect(Pizza("medium").toEqual(Pizza {size: "medium", toppings: {...}}))  

Describe Topping(name,price)  
Test: "It should create a Topping object with a name and price"  
Expect(Topping("pepperoni",1).toEqual(Topping {name:"pepperoni",price:1}))  

Describe Pizza.prototype.addTopping(topping)  
Test: "It should add a topping object to the toppings property of a pizza object"  
Code: topping1 = new Topping("pepperoni",1)  
Expect(pizza.addTopping(topping1)toEqual(Pizza {size: "medium", toppings: {pepperoni}}))  

Describe Pizza.prototype.pizzaPrice()  
Test: "It should calculate the price of the pizza based on the size"  
Code: let pizza = Pizza("medium")  
Expect(pizza.pizzaPrice().toEqual(15))  

Test: "It should calculate the price of the pizza based on its size and any toppings added"  
Code: let pizza = Pizza("medium")  
      let topping1 = Topping("pepperoni",1)  
      let topping2 = Topping("bell pepper",.5)  
      pizza.addTopping(topping1)  
      pizza.addTopping(topping2)  
Expect(pizza.pizzaPrice().toEqual(16.5))  

## Description

_This website receives a pizza order from a user who selects the size from a drop-down menu and toppings from a multi-choice checklist. It then turns those choices into a Pizza object, and uses that object to calculate a total price for the pizza._

## Setup/Installation Requirements

* _Clone github repository to your local machine_
* _Open code with VS Code or another editor_
* _Open index.html to use website_
* _(https://cat-denton.github.io/pizza-parlor)[gh-pages deployment]_

## Known Bugs

* _None_

## License

Copyright 2021 Cat Denton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Contact Information

_Cat Denton <willwdenton@gmail.com>_