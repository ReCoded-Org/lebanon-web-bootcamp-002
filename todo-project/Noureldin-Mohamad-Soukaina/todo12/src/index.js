// Declare inputs variable
const comment = document.getElementById("enter_todo");
const dateIn = document.getElementById("deadline");
const priority = document.getElementById("priority");
const btn = document.querySelector("button");

// Declare array
const entries = [];

// Display date
const today = new Date();
const date = today.toLocaleString("default", { month: "long" }) + " " + today.getDate();
document.querySelector("h2").innerHTML = `Today: ${date}`;

let ul = document.querySelector("ul");
ul.innerHTML = "<h3>Empty List</h3>";
let count = 0;
let i = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addItems();

  i++;
  count++;

  if (count !== 0) {
    document.querySelector("h3").innerHTML = "";
  }
});

function addItems() {
  // create a li with class mystyle
  let addLi = document.createElement("li");
  addLi.classList.add("mystyle");

  // create a div with class list-container inside of the li
  let contLi = document.createElement("div");
  contLi.className = "list-container";
  addLi.appendChild(contLi);

  // create and adde a checkbox to the div inside of the li
  contLi.appendChild(createCheckbox());

  // add delete button to the li
  addLi.insertAdjacentHTML("beforeend", `<div id="icon" class="icon"><i class="fas fa-trash-alt"></i></div>`);

  // display the inputs values inside of div with class list-container
  contLi.innerHTML += `<div><p>${comment.value}</p> ${dateIn.value}  ${priority.value}</div>`;
  ul.appendChild(addLi);

  addToArray();
  deleteItems(addLi, i);
  ifChecked(addLi);
}

function createCheckbox() {
  let checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  checkBox.name = "name";
  checkBox.value = " ";
  checkBox.checked = false;
  checkBox.className = "checkBox";
  return checkBox;
}

function deleteItems(li, index) {
  li.childNodes[1].addEventListener("click", () => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].key === index) entries.splice(i, 1);
    }
    li.remove();
    count--;
    console.log(entries);
    if (count === 0) {
      document.querySelector("h3").innerHTML = "Empty list";
    }
    if (count !== 0) {
      document.querySelector("h3").innerHTML = "";
    }
  });
}

function addToArray() {
  let inputs = {
    key: i,
    comment: comment.value,
    dateIn: dateIn.value,
    priority: priority.value,
  };
  entries.push(inputs);

  comment.value = "";
  dateIn.value = "";
  priority.value = "Priority 1";
}

function ifChecked(li) {
  let checkBox = li.childNodes[0].childNodes[0];
  let parag = li.childNodes[0].childNodes[1].childNodes[0];
  li.addEventListener("change", () => {
    if (checkBox.checked === true) {
      parag.style.textDecoration = "line-through";
    } else {
      parag.style.textDecoration = "none";
    }
  });
}

// function ifChecked() {
//   let comment1 = document.querySelectorAll("li .list-container div p");
//   let check = document.getElementsByClassName("checkBox");
//   for (let i = 0; i < check.length; i++) {
//     if (check[i].checked === true) {
//       comment1[i].style.textDecoration = "line-through";
//     } else {
//       comment1[i].style.textDecoration = "none";
//     }
//   }
// }

/* function end(dateIn, date) {
  if (dateIn > date) {
    comment.style.backgroundColor = "pink";
  } else {
    comment.style.backgroundColor = "white";
  }
} */

// commented code //
// const date = ( today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
// console.log(date);

// Set default date
// const defaultDate = today.getMonth() + 1 + " " + today.getDate() + "," + today.getFullYear();

// Create heading for the list state
