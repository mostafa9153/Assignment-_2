

// Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ;









// On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values &
// 3rd Variable Name And Values Both!


let firstName = "John";  // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both










// Use the correct assignment operator that will
// result in x being 50 (same as x = x * y).


x = 10;
y = 5;
x = x * y; // what will be the value of x ?

console.log(x);







// Use comments to describe the correct data type of the following variables:



let length = 16; // data type is number
let lastName = "Johnson"; // data type is string

const x = {
  firstName: "John",
  lastName: "Doe"
};    // data type is object

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof x);






// Execute the function named myFunction.

 function myFunction() {
  alert("Hello World!");
}
// call the function and see the output

myFunction();






// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").
const bio = {
    name: "jone",
    age: 50
};

let say = (bio.name + " " + "is" + " " + bio.age)
alert(say);







// 1. The <button> element should do something when someone clicks on it. Try to fix it!
// <button>Click me.</button>

function myButton() {
    alert("Button was clicked!");
}







// 1. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "ford";
console.log(Brand);








// 1. Use the correct Math method to create a random number.
let randomNumber = random.Math();


// 2. Use the correct Math method to return the largest number of 10 and 20.
let largestNumber = Math.max(10, 20);


// 3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);








// 1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;

alert(x>y) // alert true


// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

if (age<18) {
    alert("Too young");
}else {
    alert("Old enough");
}
