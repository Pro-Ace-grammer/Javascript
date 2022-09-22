// Fs module (Flie Sync)
//Synchronous process
// const { readFileSync, writeFileSync } = require(`fs`) //reading and writing the files
// the above statement is same as fs = require(`fs`)

//now to read the files first.txt and second.txt
//we create a constant and then use readfs
//file path is to be passed as a parameter
//and since the file gets encoded,
//so to be able to read such file we pass a parameter as utf-8
//this will decode the file and convert it to readable form


// const fst = readFileSync(`./pract-js/first.txt`); //here the output will be im encoded form 
// const sec = readFileSync(`./pract-js/second.txt`,`utf-8`); //here the output will be in readable form(decoded)

//now next is writefs
//this will craate one from the scratch 
//or if it already exists then it will replace the file
// wri



//IN A VERY SIMPLE WAY WE CAN UNDERSTAND THIS IN THIS WAY
const fs = require('fs')
/*
const a = fs.readFileSync('first.txt')

console.log(a.toString());  //to read the content inside the file we use a function "blah.tostring()"
// the function to string basically working similar to utf-8 to kind of decode the file into readable form
console.log('finished reading the file');
*/
