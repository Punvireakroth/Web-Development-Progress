// Write function below
const factorial = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(6));
