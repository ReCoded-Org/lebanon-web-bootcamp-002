let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

if (
  typeof document.getElementById("tasks").childNodes.childNodes === "undefined"
) {
  let div_list = document.getElementById("list");
  let el = document.createElement("p");
  el.innerHTML = "<p class='empty'> Please enter a todo </p>";
  div_list.appendChild(el);
}

document.getElementById("addToDo").addEventListener("click", function (event) {
  event.preventDefault();
  let inp = document.getElementById("new-task-description").value;
  let li = document.getElementById("tasks");
  let deadline = document.getElementById("deadline").value;
  li.innerHTML += `<li>${inp} </br> ${deadline} </li>`;
  document.getElementById("new-task-description").value = "";
  let par = document.getElementsByTagName("p")[0];
  par.remove();
});
