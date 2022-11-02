const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
let teethArr = [];
// push the numTeeth value a new array
const sortSpeciesByTeeth = (arr) => {
  arr.forEach((teeth) => {
    teethArr.push(teeth.numTeeth);
  });
  teethArr.sort();
  // sort the array of numTeeth value
  let answerSortTeeth = [];
  arr.forEach((element, index, array) => {
    if (element.numTeeth === teethArr[index]) {
      answerSortTeeth.push(array);
    }
  });
  return answerSortTeeth;
};
// speciesArray.numTeeth = teethArr[j];

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
