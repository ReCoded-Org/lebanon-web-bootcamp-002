window.addEventListener("DOMContentLoaded", () => {

// initialize the calendar
let elems = document.querySelectorAll(".datepicker");
let instances = M.Datepicker.init(elems, {
  format: "mmmm dd"
});

// initialize the dropdown menu
let elemso = document.querySelectorAll("select");
let instanceso = M.FormSelect.init(elemso, {});

// get today's date
function get_date() {
  let dateHeader = document.getElementById("date");
  let today = new Date();
  let date =
    today.toLocaleString("default", { month: "long" }) + " " + today.getDate();
  dateHeader.innerText += " " + date + " ";
}
get_date();

// initialize taskList array
let taskDetails = { Desc: "", priority: "", Deadline: "", Btn: "" };
let taskList = [];

//submit the form and clear it after each submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  getTask();
  refresh();
  form.reset();
  e.preventDefault();
});

// get the task from the user and pass it to the array
function getTask() {
  let task = document.getElementById("taskDesc").value;
  let prio = document.getElementById("priorities").value;
  let dead = document.getElementById("taskDate").value;
  taskDetails = { Desc: "", priority: "", Deadline: "", Btn: "" };
  taskDetails.Desc = task;
  taskDetails.priority = prio;
  taskDetails.Deadline = dead;
  taskList.push(taskDetails);
  return taskList;
}

// create a checkBox
function check() {
  let l = document.createElement("label");
  let check = document.createElement("input");
  check.value = taskDetails.Desc;
  check.type = "checkbox";
  check.name = taskDetails.Desc;
  check.classList.add("filled-in");
  l.appendChild(check);

  return l;
}

// Create a trash icon
function trash() {
  // <span class="material-icons">delete_forever</span>;
  let icon = document.createElement("span");
  icon.classList.add("custom");
  icon.classList.add("material-icons");
  icon.innerText = "delete_forever";
  let btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-medium indigo darken-4 right";
  btn.innerText = "Delete ";
  btn.style.backgroundColor = "transparent";
  btn.style.border = "none";
  btn.appendChild(icon);
  return btn;
}

//loop over the taskList and find which one is overdue (will be called in the refresh function)
function late() {
  let today = new Date();
  let d =
    today.toLocaleString("default", { month: "long" }) + " " + today.getDate();
  let d_string = JSON.stringify(d);
  for (let z = 0; z < taskList.length; z++) {
    let deadline = taskList[z].Deadline;
    let deadlines = JSON.stringify(deadline);

    if (deadlines < d_string) {
      let id = taskList[z].Desc;
      let label = document.getElementById(id);
      label.style.backgroundColor = "#FECFD1";
    }
  }
}

// Refresh the taskList array and add it to the HTML
function refresh() {
  const list = document.getElementById("TaskList");
  list.classList.add("collection");
  list.innerHTML = "";
  let p = document.createElement("p");
  p.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const li = document.createElement("li");
    li.classList.add("collection-item");
    const la = check();
    la.innerHTML += `<span style="color:black;"id="${taskList[i].Desc}">${taskList[i].Desc}</span>`;
    li.appendChild(la);
    let ic = trash();
    taskList[i].Btn = ic;
    li.appendChild(ic);
    let prio = taskList[i].priority;
    let par = paraOfSpans(prio, i);
    li.appendChild(par);
    let a = taskList[i].Deadline;
    let line = document.createElement("hr");
    li.appendChild(line);
    list.appendChild(li);
  }
  late(); //if the task is overdue run late() which will highligheted in red
  if (taskList.length === 0) {
    p.innerText = `You don't have any tasks!`;
    list.appendChild(p);
  }
  deleteTask();
}

//loop over the tasks delete its object from the array than refresh it again
function deleteTask() {
  for (let j = 0; j < taskList.length; j++) {
    let delBtn = taskList[j].Btn;
    delBtn.onclick = function () {
      taskList.splice(j, 1);
      refresh();
    };
  }
}

//add a priority and append it to the task
function paraOfSpans(prio, i) {
  let par2span = document.createElement("p");
  par2span.innerHTML += `<span id="sp1">${taskList[i].Deadline} </span>`;
  par2span.class = "text-start";
  let span = document.createElement("span");
  span.id = "sp2";
  span.innerHTML = `${taskList[i].priority}`;
  if (prio === "priority-1") {
    span.style.color = "#ff1744";
  } else if (prio === "priority-2") {
    span.style.color = "#ff9100";
  } else if (prio === "priority-3") {
    span.style.color = "#006064";
  }
  par2span.appendChild(span);
  return par2span;
}

//use tab to be move between the inputs in case it wasn't by browser default
function moveBetweenEl() {
  let f = document.getElementsByTagName("form");
  for (let i = 0; i < f.length; i++) {
    document.addEventListener("keypress", function (ev) {
      if (ev.key === 9) {
        f[i + 1].focus();
      }
    });
  }
}
moveBetweenEl();
refresh();
});
