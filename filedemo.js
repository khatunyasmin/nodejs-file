//Asynchronus execution
const fs1 = require("fs");

// fs1.readFile("env.txt","utf-8",(err,data)=>{
//     console.log(err,data);
// })


//Synchronus execution
const r = fs1.readFileSync("env.txt");

console.log(r.toString());

console.log("File reading is completed.")