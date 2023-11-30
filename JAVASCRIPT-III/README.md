# Class

### Intro to Class
- Classes use to model similar real-world stuff and create objects from it.
  - So code could be organized.

### Constructor
- When create a new instance of a class constructor has been called.
```js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
```
### Instance
Instance is an object of class like Dog -> Breed of dog
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
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);

surgeonRomero.takeVacationDays(3);

console.log(surgeonRomero.remainingVacationDays());
```

### Inheritance

- When we want to share the properties or methods from a class it is called inheritance.
- SupperClass is the main class we want to share properties or methods.
- The SubClass is a class that gets the properties or methods from the main class.

### Static

- static use when we want to directly call a method from its class. It means we do not have to instantiate the object from the class first in other to call the method.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

console.log(Animal.generateName()); // returns a name
```