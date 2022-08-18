//Mudules (functions)

//sayHi module
const sayHi = (name) => {
    console.log(`hello how are you ${name}`);
}
sayHi(`Adriel`)

//Demo Modules to calculate factorial
const factorial = (no) => {
    let f=1
    var i
    for(i=1;i<=no;i++)
    {
        f=f*i
    }
    console.log(`factorial of ${no} = ${f}`);
    
}
factorial(5)


