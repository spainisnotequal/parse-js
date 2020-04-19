const acorn = require("acorn");
const fs = require("fs");

// read a file
const FILE = "./foo.js";
const buffer = fs.readFileSync(FILE);

// parse the file
const ast = acorn.parse(buffer);
console.log(ast);
