const buttonEl = document.querySelector("button");

const inputEl = document.querySelector("input");

const listel = document.querySelector("ul");

const addGoal = () => {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listel.appendChild(listItemEl);
  inputEl.value = "";
};
buttonEl.addEventListener("click", addGoal);
