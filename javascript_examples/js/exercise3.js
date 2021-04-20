//Javascript exercise 3 Apr 19

//write while loop to repeatedly print value of variable xValue, decreasing it by 0.5 each time,
//as long as xValue remains positive.

/*
var xValue = 13; //set xValue you want

while (xValue >0) {
  console.log(xValue);
  xValue = xValue - 0.5;   
}

//print all the odd numbers between 1 and 100

xValue = 1; //start xValue at 1

  while (xValue <= 100) {
    if (xValue % 2) {       //check if xValue is odd
    console.log(xValue);
    }
    xValue++;
  }

  
//while loop to print 1 through n in square brackets
//for example, if n=6, print [1] [2] [3] [4] [5] [6] 

var numText = "";
var i = 1;
var n = 8;

while (i <= n) {
  numText += "[" + i + "] ";
  i++;
}

console.log(numText);

//while loop that computes sum of first n positive integers:
//sum = 1 + 2 + 3 + ... + n
//examples: 
//n = 5 sum = 15
//n = 19 sum = 190

i = 1;
n = 19;
var sum = 0;

while (i <= n) {
  sum = sum + i;
  i++;
}

console.log(sum);
*/

var cumulativeGPA = 3.0, totalUnits = 140;

if (cumulativeGPA > 2.0 && totalUnits >= 120) {
  //if (totalUnits >= 120) {
	console.log("You can graduate!");
  //}
} 


var cspGrade = 80, progGrade = 70;

if (cspGrade >= 75 && progGrade >= 75) {
  console.log("You're eligible for graduation!");
}
else {
  console.log("You are not eligible!")
}
//if (progGrade >= 75) {
  //console.log("You're eligible for graduation");
//}


if (cumulativeGPA <= 2.0 && totalUnits < 120) {
  // Do nothing 
//} else {
  sendEmail();
}

var stringText = 'I am a "duck!"';
console.log(stringText);

//Practice 5 Array forEach
//search for a name in an array

var names = ["Maria", "Antony", "Joy", "Juan"]; //customer list array
var myName = "Jean";

var newNames2 = ["Peter", "Maria", "Duck", "Jean"]; //order list array 

//I just want to compare the 2 arrays and create a new array for my own customer for the order

function addMe(names, myName) {
  names.push(myName);
}

addMe(names, myName);
console.log(names);

//part 2
//takes in a name, check if the name is in the list

//standard function
function findName(names, inputName) {
  var found = false;

  //arrow function
  //names is an array that needs to loop through to find an item in the array
  names.forEach(item => 
    {
      if (item.toUpperCase().trim() == inputName.toUpperCase().trim())
      {
        found = true;
      }
    });

    return found;
}

var checkName = findName(names, "  Jean  "); //will return a true or false from the function

if (checkName) { //==true
  console.log("Yes, the name is in the array")
}
else {
  console.log("Name cannot be found in the array")
}

function findCommonNames(list1, list2){
  
  //create an array to store names common in both lists 
  var commonNames = [];

  //list1 refers to the names array 
  list1.forEach(item1 => {
    list2.forEach(item2 => {

      //compare item1 == item 2
      if (item1.toUpperCase().trim() == item2.toUpperCase().trim()){

        commonNames.push(item1) //push from customer list to commonNames
      }

    });
  });

  //return a new array with names that are in both names
  return commonNames;
}

var returnNameArray = findCommonNames(names, newNames2);

//check if returnNameArray is empty
if (returnNameArray.length == 0) {
  console.log("no one order from the customer list")
}
else {
  console.log(returnNameArray);
} 

//Part 4 - Challenger Question
//Write a function that takes in a list of names and returns a list of Integers 
//with the length of the names in the same order as received. Hint use the push function
