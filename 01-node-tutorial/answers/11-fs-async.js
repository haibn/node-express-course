const { readFile, writeFile } = require("fs");
const path = require("path");
const filePath = path.join("temporary", "fileB.txt");

console.log("Started writing")
writeFile(filePath, "release ", (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("33% written")
    writeFile(filePath, "the ", {flag: "a"}, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log("66% written")
        writeFile(filePath, "files ", {flag: "a"}, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Finished writing")
            readFile(filePath, 'utf-8', (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const fileContent = result;
                console.log(fileContent);
            })
        })
    })
})
