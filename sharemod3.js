//defining and exporting module
//To me accessed by another file
const sayHi = (name) => {
    console.log(`hello ${name}`);
}
module.exports = sayHi