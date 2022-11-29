Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
// const buttonEl = document.querySelector("button");

// const inputEl = document.querySelector("input");

// const listel = document.querySelector("ul");

// const addGoal = () => {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listel.appendChild(listItemEl);
//   inputEl.value = "";
// };
// buttonEl.addEventListener("click", addGoal);
