//1- Implement the Check all button functionality, when clicked all check boxes should become checked
document.getElementById("check-all").addEventListener("click", checkall);
function checkall() {
  let checkboxes = document.getElementsByClassName("shopping-item");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === false) {
      checkboxes[i].checked = true;
    }
  }
}
//2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked
document.getElementById("uncheck-all").addEventListener("click", uncheckall);
function uncheckall() {
  let checkboxes = document.getElementsByClassName("shopping-item");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checkboxes[i].checked = false;
    }
  }
}
//3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
