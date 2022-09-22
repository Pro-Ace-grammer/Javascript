//fs modules
//Asynchronouse process

//fs modules
//Asynchronouse process
// const { readFile, writeFile } = require(`fs`) //reading and writing the files
// readFile(`./pract-js/first.txt`,`utf-8`,(err,result) => {   //here in the second parameter we pass call back function
//    //err is to check for error and if there are any errors it will return the specified output
//     if(err){ 
//         console.log(err);
//         return
//     }
//     const first = result;

//     readFile(`./pract-js/second.txt`,`utf-8`,(err,result) => {   //here in the second parameter we pass call back function
//     if(err){ 
//         console.log(err);
//         return
//     }
//     const second = result;
//     writeFile(
//         `./pract-js/result-sync.txt`,
//         `here is the result : ${first}, ${second}`, 
//         { flag: `a`}
//     )       
// }
// )
// })
//   utf-8 is for decoding the encoded file


//A VERY SIMPLE EXAMPLE TO UNDERSTAND THIS CONCEPT IS BELOW

const fs = require(`fs`); 
 /*
 fs.readFile('first.txt','utf-8', (err,result) => { 
       if (err)
       {
        console.log('ERROR 404, please check Your internet connection');
       } else
       {
        console.log(result);
}})
*/
fs.writeFile('edit.txt','this is a file to  understand writeFile ', ()=>{
    console.log('edited');
})
console.log(' finished');