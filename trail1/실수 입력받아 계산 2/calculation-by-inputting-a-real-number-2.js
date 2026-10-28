const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
x = n + 1.5;

console.log(x.toFixed(2));