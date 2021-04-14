/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked

2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/
let size = document.getElementsByClassName("shopping-item").length;
function checkAll() {
  for (let i = 0; i < size; i++) {
    document.getElementsByClassName("shopping-item")[i].checked = true;
  }
}
function uncheckAll() {
  for (let i = 0; i < size; i++) {
    document.getElementsByClassName("shopping-item")[i].checked = false;
  }
}

let checkButton = document.getElementById("check-all");
checkButton.onclick = function () {
  checkAll();
};

let uncheckButton = document.getElementById("uncheck-all");
uncheckButton.onclick = function () {
  uncheckAll();
};

let log = document.getElementById("log");

for (let i = 0; i < size; i++) {
  document.getElementsByClassName("shopping-item")[i].onclick = function () {
    let itemName = document.getElementsByClassName("shopping-item")[i].value;

    log.innerHTML += `<ul><li>Bought ${itemName}</li></ul>`;
  };
}
