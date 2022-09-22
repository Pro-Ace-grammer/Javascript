//This is demo about url modules
import url from "url";
const myURL = new URL('https://example.org')
myURL.pathname = 'a/b/c'
myURL.search = '*#)$&'
myURL.hash = '#fgh'
console.log(myURL);
console.log(myURL.href);

//still more things to search and try of it
