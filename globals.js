//Globals
// __dirname - gives the current directory path
console.log(__dirname);

// __filename
console.log(__filename);

//setInterval
/*setInterval(() => {
    console.log(`hello`);
}, 1000);


//setTimeout
setTimeout(() => {
    console.log(`hello`);
}, 100);*/


setTimeout(() => {
    setInterval(() => {
        console.log(`hello`);
    }, 1000);
}, 100);