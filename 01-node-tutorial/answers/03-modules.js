const names = require("./04-names");
const greet = require("./05-utils");
const answers = require("./06-alternative-flavor");

greet(names.ivan)
console.log(answers.answers[1]);
console.log(`oh fr, how about we go get some ${answers.foods[0]}`);
require("./07-mind-grenade");