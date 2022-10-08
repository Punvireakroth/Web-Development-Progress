let footBallTeam = {
  crew: {
    defender: {
      name: "Jinit chan",
      age: 19,
    },
    midfiel: {
      name: "Hong Robea",
      age: 20,
    },
    attacker: {
      name: "VireakRoth",
      age: 20,
    },
  },
};

for (let member in footBallTeam.crew) {
  console.log(`${member}: ${footBallTeam.crew[member].name}`);
}
