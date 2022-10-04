let input = "i am vireakroth";

vowels = ["a", "e", "i", "o", "u"];

resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  } else if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
let resultString = resultArray.join("");
console.log(resultString.toUpperCase());
