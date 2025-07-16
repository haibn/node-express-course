const os = require("os");

const hostName = os.hostname();
const machine = os.machine();

console.log("host name: ", hostName)
console.log("machine: ", machine)