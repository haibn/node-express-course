const { error } = require("console");

const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "4 ", {flag: "a"}).then(
    writeFile("temp.txt", "5 ", {flag: "a"}).then(
        writeFile("temp.txt", "6 ", {flag: "a"}).then(
            readFile("temp.txt", "utf-8").then(
                (content) => {
                    console.log("File content: ", content);
            }).catch(
                (err) => {
                    console.log("Error: ", err);
                }
            )
        )
    )
)