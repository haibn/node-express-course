const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile("temp.txt", "1 ", {flag: "a"});
        await writeFile("temp.txt", "2 ", {flag: "a"});
        await writeFile("temp.txt", "3 ", {flag: "a"});
    } catch (error) {
        console.log("Writer error: ", error)
    }
}

const reader = async (file) => {
    try {
        const fileContent = await readFile(file, 'utf-8');
        console.log("File content: ", fileContent);
    } catch (error) {
        console.log("Reader error: ", error)
    }
}

const readWrite = async () => {
    try {
        await writer();
        await reader("temp.txt");
    } catch (error) {
        console.log("readWrite error: ", error)
    }
}

readWrite()