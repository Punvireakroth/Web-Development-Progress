const shoutGreetings = (arr) => arr.map((shout) => shout.toUpperCase() + "!");

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
