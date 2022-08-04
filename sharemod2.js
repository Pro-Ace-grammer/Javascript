//To access modules from another files

const names = require('./sharemod1')    //require is for importing 
const sayHi = require('./sharemod3')    
//sayHi('Arsalan')
//sayHi(names.alo)    //calling through object
//sayHi(names.blah)   //names is an object


// To call the module(function) 
require(`./mind-granade`)   //This gets executed automatically  
                            //as it is already called
