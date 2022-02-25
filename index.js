let number = document.getElementById("number");
let entries = document.getElementById("entries");
let count = 0;

function increment() {
  count += +1;
  number.textContent = count;
}

function save() {
  let savedNumber = count + " - ";
  entries.textContent += " " + savedNumber;
  number.textContent = 0;
  count = 0;
}
