let arr = [];
const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
