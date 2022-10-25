const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => {
  arr = arr.map(toSquare);
  return arr;
};

console.log(squareNums(numbers));
