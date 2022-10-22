const reverseArray = (arr) => {
  let afterReverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    afterReverse.push(arr[i]);
  }
  return afterReverse;
};

const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));
