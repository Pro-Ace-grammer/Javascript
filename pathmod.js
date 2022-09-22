//Path module
const path = require(`path`) //in require we pass the module we want to use 
                             //in this case it is path which is an in built module
//once we pass the module then we can use its properties as done below

//separator
 console.log(path.sep);


 // path join
const filePath = path.join(`/example`,`sub test`,`test.txt`,`index.html`)
console.log(filePath)

//base name :- if we just want to return the last file only
const base = path.basename(filePath);
console.log(base);

//resolve property
//this is usefull as the the app can run in different environment
//so the path to some kind of resource is going to differ as well
const res = path.resolve(__dirname,`pract-js`,`sub test`,`test.txt`)
console.log(res);

const dirn = path.dirname(filePath)