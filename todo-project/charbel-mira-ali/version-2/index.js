let dateTime = new Date();
let month = dateTime.getUTCMonth() + 1; //months from 1-12
let day = dateTime.getUTCDate();
let year = dateTime.getUTCFullYear();
let newDate = day + "/" + month + "/" + year;
document.getElementById("date").innerText += newDate;

let button = document.querySelector("form");
let element = document.createElement("div");
element.classList.add("divDecoration");
document.body.appendChild(element);
let ul = document.createElement("ul");
element.appendChild(ul);
let p = document.createElement("p");
p.innerHTML = "You have no tasks. Yay!";
element.appendChild(p);
let counter = 0;

button.addEventListener("submit", append);
function append(e) {
  counter++;
  p.remove();
  let cal = document.getElementById("deadLine").value;
  let toDo = document.getElementById("toDo").value;
  let val = document.getElementById("priorities");
  let pr = val.value;
  let obj = {
    toDo,
    cal,
    pr
  };
  let li = document.createElement("li");
  let html = `<input class="checkbox" id="todo_${counter}" data-id="${counter}" name="rad" type="checkbox" > <span id='name_${counter}'>${obj.toDo}</span> <span>${obj.cal}</span> <span>${obj.pr}</span> `;
  li.setAttribute("id", counter);
  li.innerHTML = html;
  ul.appendChild(li);

  let resetForm = document.getElementById("form1");
  resetForm.reset();
  e.preventDefault();
  let checkBox = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkBox.length; i++) {
    // console.log("hey");
    checkBox[i].addEventListener("change", checkedOrNot);
  }
}

function checkedOrNot() {
  let isChecked = this.checked;
  let index = this.getAttribute("data-id");
  console.log("index is" + index);
  let td = document.getElementsByClassName("td");
  if (isChecked) {
    document.getElementById("name_" + index).style.textDecoration =
      "line-through";
  } else {
    document.getElementById("name_" + index).style.textDecoration = "none";
  }
}
