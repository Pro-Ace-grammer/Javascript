//Built in Modules

//os module
const os = require(`os`)
// Using os. we can use its many of the functionalities
//example:- to get info about the current user

//const user = os.userInfo()   //Invoking module usin dot operator
//console.log(user);

/*const u = os.homedir() //home directory
console.log(u);*/

/*const w = os.version() //to check version
console.log(w);*/

//methods return the system uptime in seconds
//console.log(`the system uptime is ${os.uptime()} seconds  `);

//in a module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS);