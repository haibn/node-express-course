const EventEmitter = require("events");

const emitter = new EventEmitter();

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

setInterval(() => {
    emitter.emit('response', "My favorite number is: ")
}, 1000)

emitter.on('response', (message) => {
    console.log(message, getRandomNumber(1000))
})