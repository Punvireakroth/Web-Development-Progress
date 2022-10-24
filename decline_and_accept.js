const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (veggies) => {
  veggies.forEach(politelyDecline);
};

declineEverything(veggies);

const accept = (veg) => {
  console.log(`Ok, I guess I will eat some ${veg}.`);
};

const acceptEverything = (veggies) => {
  veggies.forEach(accept);
};

acceptEverything(veggies);
