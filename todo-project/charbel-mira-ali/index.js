let dateTime = new Date();
let month = dateTime.getUTCMonth() + 1; //months from 1-12
let day = dateTime.getUTCDate();
let year = dateTime.getUTCFullYear();
let newDate = day + "/" + month + "/" + year;
document.getElementById("date").innerText += newDate;

let button = document.querySelector("form");
let element = document.createElement("div");
document.body.appendChild(element);
let ul = document.createElement("ul");
element.appendChild(ul);
let p = document.createElement("p");
p.innerHTML = "You're Task-free. Yay! :p";
element.appendChild(p);

button.addEventListener("submit", append);
function append(e) {
  p.remove();
  let cal = document.getElementById("deadLine").value;
  let toDo = document.getElementById("toDo").value;
  let li = document.createElement("li");
  let dis = toDo + " " + cal;
  li.innerHTML = dis;
  ul.appendChild(li);
  let resetForm = document.getElementById("form1");
  resetForm.reset();
  e.preventDefault();
}
