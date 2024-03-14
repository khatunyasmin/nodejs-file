const os = require("os");
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());

const EventEmitter = require("events");

class MyEmitter extends EventEmitter{}
const MyEmitter1 = new MyEmitter();
MyEmitter1.on("TimeUp",()=>{
    console.log("Please take out the clothes from the washing machine.")

});
MyEmitter1.emit("TimeUp");