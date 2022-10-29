const findMyKeys = (arr) => {
  if (arr.includes("keys") == true) {
    return arr.indexOf("keys");
  } else {
    return -1;
  }
};

const randomStuff = ["credit card", "screwdriver", "receipt", "gum", "keys", "used gum", "plastic spoon"];

console.log(findMyKeys(randomStuff));
// Should print 4
