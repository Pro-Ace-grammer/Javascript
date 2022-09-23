//since node.js works on event driven architecture
//- mean events can be fired up from anywhere and any time 
//and if once the event is fired we can listen to that particular event( basically means we can take some action on that particular event)
//to understand event emmission
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => { //unless the event is fired this code won't run just like functions 
  console.log('Turn off Motor');
  setTimeout(() => {
    console.log("please turn it off, its a gentle reminder");
  }, 5000);
});

//the code outside the above block of code is still going to run no matter what
console.log("this will be running");
console.log("this will still be running");


//to fire an event it can be done as shown below
myEmitter.emit('WaterFull');

