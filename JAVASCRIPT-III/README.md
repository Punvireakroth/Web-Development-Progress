# Class

### Intro to Class
- Classes use to model similar real-world stuff and create objects from it.

### Constructor

```js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
```
### Instance

```js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
```

### Methods

```js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }

}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
```

### Method call

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Doggie');
```