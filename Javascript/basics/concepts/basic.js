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


//above were some of the basics in javasctipt
//there is more to go which are covered in some other programs do check out