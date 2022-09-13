//fs modules
//Asynchronouse process
const { readFile, writeFile } = require(`fs`) //reading and writing the files
readFile(`./pract-js/first.txt`,`utf-8`,(err,result) => {   //here in the second parameter we pass call back function
   //err is to check for error and if there are any errors it will return the specified output
    if(err){ 
        console.log(err);
        return
    }
    const first = result;

    readFile(`./pract-js/second.txt`,`utf-8`,(err,result) => {   //here in the second parameter we pass call back function
    if(err){ 
        console.log(err);
        return
    }
    const second = result;
    writeFile(
        `./pract-js/result-sync.txt`,
        `here is the result : ${first}, ${second}`, 
        { flag: `a`}
    )       
}
)
})
//   utf-8 is for decoding the encoded file