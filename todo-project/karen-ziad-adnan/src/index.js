window.addEventListener("DOMContentLoaded", () => {
function get_date() {
  let dateHeader = document.getElementById("date");
  let today = new Date();
  let date = today.toLocaleString('default', {month: 'long'}) + " " + today.getDate();
  //   today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  dateHeader.innerText += " " + date + " ";
}

get_date();

let taskDetails = { taskDesc: "", priority: "", taskDate: "" };
function add_list() {

  const taskList = [];
  let p = document.createElement("p");
  const form = document.querySelector("form");
  let h = document.createElement("h4");

  form.addEventListener("submit", (e) => {
    let task = document.getElementById("taskDesc").value;
    let prio = document.getElementById("priorities").value;
    taskDetails.taskDesc = task;
    taskDetails.priority = prio;
    const Date = document.getElementById("taskDate").value;
    taskDetails.taskDate = Date;
    taskList.push(taskDetails);
    const li = document.createElement("li");
    li.class = "list-group-item";
    li.classList.add("fw-bold")
    const list = document.getElementById("TaskList");

    li.innerHTML = `<input  value="${task}" type="checkbox" name="${task}"/>
                    <label for="${task}"> ${task}</label>`;
    let par = document.createElement("p");
    par.innerHTML += `<span  class= "fw-light" style="font-size:.75rem">${Date} </span>`
    par.class = "text-start";
    let span = document.createElement("span");
    span.innerHTML += `${prio}`;
// console.log(prio)
  if(prio === 'priority-1'){
      span.classList.add("text-danger");
      span.classList.add("fw-bold")
      span.style.fontSize = ".75rem"
              }
  else if(prio === 'priority-2'){
      span.classList.add("text-warning");
      span.classList.add("fw-bolder");
      span.style.fontSize = ".75rem"
                          }
  else if(prio === 'priority-3'){
      span.classList.add("text-info");
      span.classList.add("fw-bolder");
      span.style.fontSize = ".75rem"
    }

    par.appendChild(span);
    li.appendChild(par);
    list.appendChild(li);
    form.reset();
    p.innerText= " ";
    e.preventDefault();
  });


  if (taskList.length === 0) {
    p.innerText = `You don't have any tasks!`;
    document.getElementById("lists").appendChild(p);
  }
}
add_list();


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

let selected = document.getElementById("priorities").value;

});
