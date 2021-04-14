/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked

2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. 
Check the Example image for clarity
*/

document.getElementById("check-all").addEventListener("click", checkAll);
document.getElementById("uncheck-all").addEventListener("click", uncheckAll);
let checkbox = document.querySelectorAll("input");
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", addLog);
}

function checkAll() {
  document.getElementById("log").innerHTML = "<ul>";
  let checkbuttons = document.querySelectorAll("input");
  for (let i = 0; i < checkbuttons.length; i++) {
    checkbuttons[i].checked = true;
    if (i !== checkbuttons.length - 1) {
      document.getElementById(
        "log"
      ).innerHTML += `<li>${checkbuttons[i].value} is checked</li>`;
    } else {
      document.getElementById(
        "log"
      ).innerHTML += `<li>${checkbuttons[i].value} is checked</li></ul>`;
    }
  }
}

function uncheckAll() {
  document.getElementById("log").innerHTML = "<ul>";
  let checkbuttons = document.querySelectorAll("input");
  for (let i = 0; i < checkbuttons.length; i++) {
    checkbuttons[i].checked = false;
  }
}

function addLog() {
  let index = [];
  let checkbuttons = document.querySelectorAll("input");
  for (let i = 0; i < checkbuttons.length; i++) {
    if (checkbuttons[i].checked === true) {
      index.push(i);
    }
  }
  document.getElementById("log").innerHTML = "<ul>";
  for (let j = 0; j < index.length; j++) {
    if (j !== index.length - 1) {
      document.getElementById("log").innerHTML += `<li>${
        checkbuttons[index[j]].value
      } is checked</li>`;
    } else {
      document.getElementById("log").innerHTML += `<li>${
        checkbuttons[index[j]].value
      } is checked</li></ul>`;
    }
  }
}
