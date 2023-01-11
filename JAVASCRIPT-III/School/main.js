class School {
  // constructor
  constructor(name) {
    this._name = name;
    this.level = [];
    this.numberOfStudents = 0;
  }

  // getter
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudent;
  }

  // setter
  set numberOfStudents(value) {
    this._numberOfStudent = value;
  }

  // method
  static quickFacts() {}
  static pickSubstituteTeacher() {}
}
