//Practice 1: Basic functions

//1)create a function to print out "Hello World"

//This is a standard function
function hello() {
    console.log("Hello World!")
}

hello();

//2) Add 2 numbers together with standard function

function add(a,b) {
    //local variable
    var addition = a + b;
    console.log(addition);
}

add(3,4);

//3) Prints the length of a word using standard function
// with return value

function wordLength(word) {
    var len = word.length;   //check out trim to cut space 
    return len;
}

var getLen = wordLength(' Jean ');
console.log("The length of the word:" + getLen);

//function Expressions - anonymous (nameless) function
//anonymous function is invoked (called) automatically
//right after it is created.
var sum = function(a,b) {return a + b};

var user1 = sum(2,3);
console.log(user1);

var user2 = sum(4,5);
console.log(user2);

//Self invoking function is invoked (called)
//right after it is created. The variables 
//declared in the function are not accessable 
//outside. This type of function is useful to 
//perform initialization work (e.g create event
//listener for a button when I first launch the
//html page). Will be called one time only. - 
//games to set the score to zero when first 
//launched the page.
(function () {
    var x = "Hello";
    console.log(x);
})();

//Arrow function
//allowss a short syntax version for writing the function 
//expression. Do not need the function keyword.

const x = (a,b) => a + b; //return a + b

console.log("Using the Arrow Function: " + x(2,3));

var user3 = x(4,5);
console.log(user3);


//Practice 2: Function Object
//1)Information card

//standard function with return value
function informationCard(myName, myLocation, myHobby) {
    
    return "Hi, my name is " + myName + ". I live in " + myLocation + 
    " and enjoy " + myHobby; 
        
}

console.log(informationCard('John', 'South Africa', 'drinking homemade wine'));

//2)calculator

    //local variable
    const addition = (a,b) => a + b;
    const subtraction = (a,b) => a - b;
    const multiplication = (a,b) => a * b;
    const division = (a,b) => a / b;
    console.log(addition(2,3));
    console.log(subtraction(3,4));
    console.log(multiplication(2,3));
    console.log(division(4,2));

//Practice 3:
//Exercise 1

//store in database, retrieve it
var smallItemServiceFee = 3;
var bigItemServiceFee = 8;
var interest = 0.01;
var totalCost = 0;

const trueCost = (price, fee, interest) => 
price + (price * interest) + fee;

function addToCart(amt) {
    //calculate the total cost
    totalCost = totalCost + amt;
    //totalCost += amt;

    //Perform other actions...
}

var price = 50;
var amtPay = 50;


//1)Product list - retrieve from the database (SQL) backend
var products = {massageChair: 300, dress: 20, iphone: 600};
//Quantity

//2)Mary wants to add the massageChair into the shopping cart
//Mary clicks on the 'add to cart' button.
//(1) show Mary the total cost, 
//(2) show Mary cart page with product details (name, price, color)

addToCart(products.massageChair);
addToCart(products.dress);

//What is my totalCost now = 320 --> Now Mary wants to check out
//which include service fee and interest fee
totalCost = trueCost(totalCost, bigItemServiceFee, interest);
console.log("Total cost to be paid by Mary is $" + totalCost.toFixed(2));



console.log("For the transaction of $" + price + 
            " , Mary has to pay $" + amtPay.toFixed(2)); 

//Exercise 2:
//Part 1:
function friends(name1, name2, name3) {
    
    console.log('Welcome ',name1, name2, 'and', name3) 
}

friends('Amy', 'Veronica', 'Phoebe');

//Part 2:
function age (birthYear = prompt("What is your birth year?")){

return 2021 - birthYear;

}
console.log("Your current age is " + age());

//part 3:
function greeting (name1,age1,name2,age2,name3,age3) {

    console.log("Welcome " + name1 + " you are " + age1 + ". Welcome "
+ name2 + " you are " + age2 + ". Welcome " + name3 + 
" you are " + age3 + ".");

}
greeting("Ann", 10, "Ben", 12, "Calvin", 20);

    

