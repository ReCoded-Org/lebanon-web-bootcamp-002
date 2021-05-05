function getDate(d) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  d = d.split("-");
  if (d[1][0] === "0") {
    d[1] = d[1][1];
  }
  if (d[0][0] === "0") {
    d[0] = d[0][1];
  }
  return MONTHS[d[1] - 1] + " " + d[0] + ", " + d[2];
}

// Insert today date
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = dd + "-" + mm + "-" + yyyy;
let today_date = mm + "/" + dd + "/" + yyyy;
today_date = Date.parse(today_date);
//console.log(today_date);
document.querySelector("h1").innerText = `Today is ${getDate(today)}`;
document.getElementById("todo_date").value = today
  .split("-")
  .reverse()
  .join("-");


//Functions
function check() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for(let i=0;i<checkboxes.length;i++)
    {
      checkboxes[i].addEventListener("click", (e) => {
          let el = e.currentTarget.nextElementSibling;
          el = el.querySelector("label");
          el.innerHTML = "<del>" + el.innerHTML + "</del>";
        });
    }
  }

function updateStorage(task) {
  task.date = task.date.split("-").reverse().join("-");
  tasks.push(task);
  if(awesome === true)
  {
    document.getElementById("notask").remove();
    awesome = false;
  }
  // console.log(noTask);
  // noTask.remove();
  storage.clear();
  storage.setItem("tasks", JSON.stringify(tasks));
}

function addScreen(task) {

    let task_date = task.date.split("-");
    let aux = task_date[0];
    task_date[0] = task_date[1];
    task_date[1] = aux;
    task_date = Date.parse(task_date);

    if(today_date>task_date)
    {
      document
    .getElementById("list")
    .insertAdjacentHTML(
      "beforeend",
      `<div><div class="container"><div class="container1"><input type="checkbox" name="check"><div class="container2"><label><span>${
        task.name
      }</span></label><div class="container3"><em>Priority ${
        task.priorities + 1
      }</em>${
        getDate(task.date)
      }</div></div></div><img src = "delete.png" id="delete"></div><hr class="hr1"></div>`
    );
    }
    else {
      document
    .getElementById("list")
    .insertAdjacentHTML(
      "beforeend",
      `<div><div class="container"><div class="container1"><input type="checkbox" name="check"><div class="container2"><label>${
        task.name
      }</label><div class="container3"><em>Priority ${
        task.priorities + 1
      }</em>${
        getDate(task.date)
      }</div></div></div><img src = "delete.png" id="delete"></div><hr class="hr1"></div>`
    );
    }


  let em = document.querySelectorAll("em");
  let last_em = em[em.length - 1];
  switch (last_em.innerText) {
    case "Priority 1":
      last_em.style.color = "red";
      break;
    case "Priority 2":
      last_em.style.color = "orange";
      break;
    case "Priority 3":
      last_em.style.color = "yellow";
      break;
    default:
      break;
  }
}

function deleteTask(e) {
  if (e.target.tagName.toLowerCase() === "img") {
    let container = e.target.parentElement;
    console.log(container);
    
  
  tasks = JSON.parse(storage.getItem("tasks"));
  console.log(tasks);
  //let container = e.target.parentElement;
  let label = container.querySelector(".container1").querySelector(".container2").querySelector("label");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name === label.innerText) {
      tasks.splice(i, 1);
    }
  }
  console.log(tasks);
  storage.clear();
  storage.setItem("tasks",JSON.stringify(tasks));
  e.target.parentElement.parentElement.remove();
  if(tasks.length === 0)
  {
      awesome = true;
      document.getElementById("list").insertAdjacentHTML("beforebegin","<p id='notask'>Awesome! You have no tasks to do.</p>");
  }
  //console.log(arr);
 }
}

// Task counter and "No tasks" sentence
let awesome = true;
const storage = window.localStorage;
const noTask = document.getElementById("notask");
let tasks = JSON.parse(storage.getItem("tasks"));
//console.log(tasks);
if (tasks === null) {
  tasks = [];
  awesome = true;
}
let taskCounter = tasks.length;
if (taskCounter !== 0) {
  noTask.remove();
  awesome = false;
  for (let i = 0; i < tasks.length; i++) {
    addScreen(tasks[i]);
  }
  check();
}


// TODO button
const btn = document.getElementById("button");
btn.addEventListener("click", function (e) {
  const task = {
    name: document.getElementById("todo").value,
    date: document.getElementById("todo_date").value,
    priorities: document.getElementById("priorities").selectedIndex
  };
  if ((task.name !== "") & (task.date !== "")) {
    updateStorage(task);
    addScreen(task);
    check();
    document.getElementById("todo").value = "";
  }
});

//Delete button
document.getElementById("list").addEventListener("click", function (e) {
    deleteTask(e);
  });
