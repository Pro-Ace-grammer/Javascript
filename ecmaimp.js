//here in ecma script the way to import the module is below

// -1-
// import {simple} from "./ecmaexp.js"
// simple()


//-2-
// import simple2 from "./ecmaexp.js";
// simple2()


//-3-
// import {simple3 as simple21} from "./ecmaexp.js";
// simple21()


//-4-
import * as a from "./ecmaexp.js";
console.log(a.simple());


//that were some types to import the modules E6
