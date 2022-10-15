const team = {
  _players: [
    { firstName: "Vireak", lastName: "Pun", age: 20 },
    { firstName: "Hello", lastName: "U", age: 20 },
    { firstName: "Manuth", lastName: "Nov", age: 19 },
  ],
  _games: [
    { opponent: "mark", teamPoint: 98, opponentPoints: 87 },
    { opponent: "Zaka", teamPoint: 97, opponentPoints: 87 },
    { opponent: "Henry", teamPoint: 89, opponentPoints: 87 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("SodaRoth", "Hen", 24);

team.addGame("Black Dragon", 100, 98);

console.log(team._players);
console.log(team._games);
