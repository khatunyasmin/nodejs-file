//Asynchronus execution
// const fs1 = require("fs");

// fs1.writeFile("write2.txt","You have to believe in yourself when no one else does.",()=>{
//     console.log("File is written successfully.");
// });

// console.log("Data writing is completed.");

//Synchronus execution
const fs1 = require("fs");
const w = fs1.writeFileSync("write3.txt","Life is unpredictable.");
console.log("File is written successfully.");
console.log("Data writing is completed.");


