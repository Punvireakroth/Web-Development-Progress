const justCoolStuff = (arr1, arr2) => {
  let intersect = arr1.filter((value) => arr2.includes(value));
  return intersect;
};

const coolStuff = ["gameboys", "skateboards", "backwards hats", "fruit-by-the-foot", "pogs", "my room", "temporary tattoos"];

const myStuff = ["rules", "fruit-by-the-foot", "wedgies", "sweaters", "skateboards", "family-night", "my room", "braces", "the information superhighway"];

console.log(justCoolStuff(myStuff, coolStuff));
