const EventEmitter = require('events');
 
class MyEmitter extends EventEmitter {}
 
const MyEmitter1 = new MyEmitter();
 
MyEmitter1.on('TimeUp',() => {
    console.log('Please take out the clothes from the washing machine.');
})
 
MyEmitter1.emit('TimeUp');