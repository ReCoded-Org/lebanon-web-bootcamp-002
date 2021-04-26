let dateTime = new Date();
let month = dateTime.getUTCMonth() + 1;
//console.log(month + "hoiii");
// let myStorage = window.localStorage;
let day = dateTime.getUTCDate();
let year = dateTime.getUTCFullYear();
let result;

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".datepicker");
//   var instances = M.Datepicker.init(elems, options);
// });

let nn = dateTime.toLocaleString("default", { month: "long" });
let final_date = " " + nn + " " + dateTime.getDate();

document.getElementById("date").innerText += final_date;
let objArray = [];
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
  let calOutput = document.getElementById("deadLine").value;
  result = calOutput.split("-");
  let obj = {
    toDo,
    cal,
    pr
  };
  objArray.push(obj);
  localStorage.setItem("item" + counter, JSON.stringify(obj));
  let li = document.createElement("li");
  let getObj = JSON.parse(localStorage.getItem("item" + counter));
  let html = `<input class="checkbox" id="todo_${counter}" data-id="${counter}" name="rad" type="checkbox" > <span id='name_${counter}'>${getObj.toDo}</span> <img class="spanBin" id="del-${counter}" src="https://img.icons8.com/fluent-systems-regular/48/000000/delete.png"/> <br> <span class="spanDate">${getObj.cal}</span> <span class="spanPrio">${getObj.pr}</span> `;
  li.setAttribute("id", counter);
  li.innerHTML = html;
  ul.appendChild(li);
  let del = document.getElementById("del-" + counter);
  del.onclick = function () {
    localStorage.removeItem("item" + counter);
    li.remove();
  };
  latetask();
  let resetForm = document.getElementById("form1");
  resetForm.reset();
  e.preventDefault();
  let checkBox = document.querySelectorAll(".checkbox");
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("change", checkedOrNot);
  }
}

//console.log(objArray.length);
function checkedOrNot() {
  let isChecked = this.checked;
  let index = this.getAttribute("data-id");
  console.log("index is" + index);
  // let td = document.getElementsByClassName("td");
  if (isChecked) {
    document.getElementById("name_" + index).style.textDecoration =
      "line-through";
  } else {
    document.getElementById("name_" + index).style.textDecoration = "none";
  }
}

function latetask() {
  // let index = this.getAttribute("data-id");
  console.log("s11");
  if (result[0] <= year) {
    console.log("s12");
    if (result[1] <= month) {
      console.log("s13");
      if (result[2] < day) {
        document.getElementById("name_" + counter).style.backgroundColor =
          "red";
      }
    }
  }
}
