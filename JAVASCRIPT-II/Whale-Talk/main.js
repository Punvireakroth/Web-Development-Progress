let input = "Hi you";

vowels = ["a", "e", "i", "o", "u"];

resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      console.log(input[i]);
    } else {
      console.log("no");
    }
  }
}
