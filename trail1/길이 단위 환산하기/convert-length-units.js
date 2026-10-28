const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cm = n * 30.48;

console.log(cm.toFixed(1));