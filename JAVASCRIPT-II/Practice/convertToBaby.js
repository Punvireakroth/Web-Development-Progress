const convertToBaby = (animals) => {
  let baby = [];

  for (let i = 0; i < animals.length; i++) {
    baby.push(`baby ${animals[i]}`);
  }
  return baby;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
