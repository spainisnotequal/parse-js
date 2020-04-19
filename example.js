const acorn = require("acorn");
const walk = require("acorn-walk");
const fs = require("fs");

// read a file
const FILE = "./foo.js";
const buffer = fs.readFileSync(FILE);

// parse the file
const ast = acorn.parse(buffer);

// simple walk looking for a literal
walk.simple(ast, {
  Literal(node) {
    console.log(`Found a literal: ${node.value}.`);
  },
});

// full walk, logging the type of nodes
walk.full(ast, (node) => {
  console.log(`There's a ${node.type} node.`);
});
