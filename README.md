# _Pizza Parlor_

#### _Takes a pizza order for a hypothetical customer_

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

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

Copyright 2021 Cat Denton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Contact Information

_Cat Denton <willwdenton@gmail.com>_