
//FUNCTIONS
/*
Function : its a block of code designed 
to perform a partiicular task and its executed when it is called 
*/

//To define a function we use a keyword as function

//below is the demo of creation of function
function sayMyName(){
    console.log('My name is Arsalan')
  } //if at this point if I try to run the program it won't really do anything 
  // The reason for that is that for funtion to be executed it had to be called first
  // so to call it we say 
  sayMyName();  //that's it now oncw it encounters this statement the function will be executed

  

//Function Arguments
//these are the values recieived by the function when it is called, they are like variables which live only within the fucntions and not outside of it
// example below

function sum(a,b)//function sum is taking two arguments a and b
{ 
   let add = a + b;
  console.log(add);
}
//user input can be done as below
//sum(Number(prompt('a:')),Number(prompt('b:')));

//normal function calling is done as below
sum(4,6);



//More example as to use template literals
function greeting(name) {
    // greet = 'hi ' + name + ', Nice to meet you!'
    // template literals ``
    greet = `hi ${name}, Nice to meet you!`
    console.log(greet)
  }
  
  greeting('Johnny Depp')