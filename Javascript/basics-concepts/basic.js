//javascript 101
//here its just some basics of javascript

//to print something we use a function as
/*console.log(`hello world`); //so the output of this is going to be {hello world}


//Variables :- these are place holders to store information and data in your app/software
// // variables (var, const, let)
// let name = 'Peter Pan'
// console.log(name)

name = 'Arsalan Darvajkar'
console.log(name);
number = 9764;
console.log(number)

/* data types (strings, numbers)
numbers => 1, 5, 10, 100, 2.5
strings => 'hello', "what is up"
arrays => []
objects => {}
boolean => true / false (banks)
*/

//comments are the part that does not get executed single line we use '//' and for double we use '/* ----- */
//this is a single line comment

/* this is a 
multiple line
comment*/

//operator :- used to assign values, compare values. perform arithmetic operations
//= + - * / % && || != < > <= >= == ! & | :- these are some of the operators used

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down //if i have a number as 2.3 it will round it down to 2
Ceil - Rounds up //if i have a number as 4.578 it will round it up to 5
Random - gives you number between 0 and 1  // but we wanna try and get a number between 0 and any other number we just have to multiply the number to the function
*/

//OPERATORS
//to find the tip amount

/*
food = 20 //amout of food
tiper = 0.5  //tip percentage
tipamnt = food * tiper  //here we have calculated the tip amount
console.log(tipamnt); // to print the value
*/



//user input 
//we use prompt() function to make it interactive 
//so this basically takes input from the user and stores it in a variable
//its very important as to built apps since they have to be interactive
//to create very bacis app which is a tip calculator

/*
food = prompt('how much was the food') //amount of food to be taken as input from user
tiper = 0.5  //tip percentage
tipamnt = food * tiper  //here we have calculated the tip amount
console.log(tipamnt); // to print the value
 */


//Tip calculator app using jacascript
//for tip calculator we require tip amount 
//the amount of food as well 

food = Number(prompt('Enter the amount of food: '));
tiper = Number(prompt('Enter the tip percent:')) / 100;
tipamnt = tiper * food;
console.log('Tip amount:-' + tipamnt)

total = tipamnt + food;  // this will append it as a string rather adding them if its a string

console.log('Total amount to be paid: ' + total) //if we do this we won't get the result 


//So basiclly in reality when we create apps we don't use prompt  or alert 


// Simple weather app 
//conditional
//if it rains 'Use your umbrella'
//if its sunny 'Use your sunglasses'
//if its cold 'wear sweater'
/*

let weather = 'warm'

if (weather == 'rain' || weather == 'rainy' || weather == 'raining' || weather == 'cloudy' || weather == 'rain') {
  console.log('Use your Umbrella')
} else if (weather == 'sunny' || weather == 'hot' || weather == 'warm') {
  console.log('Wear your sunglasses')
} else {
  console.log('Wear sweater')

}

*/



//FUNCTIONS
/*
Function : its a block of code designed 
to perform a partiicular task and its executed when it is called */
