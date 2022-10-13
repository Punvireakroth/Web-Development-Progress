const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Meal is ${this._meal} for ${this._price}!`;
    } else {
      return `Meal or price not set correctly`;
    }
  },
};

menu.meal = "pizza";
menu.price = 20;

console.log(menu.todaysSpecial);
