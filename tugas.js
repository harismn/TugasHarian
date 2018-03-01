/*Exercise for batch 4, Object-Oriented Programming in JavaScript:
1. Create a constructor function for a book object that implements the following:
    - It has publicly accessible variables named title, author, publisher and can be set during object creation
    - It has local (non-publicly accessible) variables named "price", "amount_left", "discount" (float)
    - It has publicly accessible function:
        a. set and get the local "price" variable (two functions)
        b. "add_amount" function to add a certain number into the local variable "amount_left"
        c. "sell" function that accept integer argument that will substract from "amount_left"
        d. "check_amount" function to see the amount_left
        e. set and get functions for the "discount" variable
        f. "get_net_price" function to get the net price adjusted by the discount amount
2. Make three instances of the objects with all the variables set according to your wish (just make all the three differs)
3. Make a function that can accept all the three object instances (bonus point: it can take any number of book instances) that return object in the form of:
    {
        total_amount_left : // sum of all the amount_left all the inputted book instances,
        total_net_price : // sum of all the net price of the inputted book intances
    } */

    class Book {
        constructor(title, author, publisher, obj){
            this.title = title;
            this.author = author;
            this.publisher = publisher;
            this.obj = {}
            var price, amount_left, discount;
        }
        get price(){

        }
        set price(){

        }
        mount(){

        }
        sell(){

        }
        check_amount(){

        }
        get_net_price(){

        }
      }

      