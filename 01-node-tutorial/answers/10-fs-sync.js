const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
const filePath = path.join("temporary", "fileA.txt");

writeFileSync(filePath, "release ", {flag: "a"})
writeFileSync(filePath, "the ", {flag: "a"})
writeFileSync(filePath, "files ", {flag: "a"})

const fileContent = readFileSync(filePath, 'utf-8');
console.log(fileContent);
