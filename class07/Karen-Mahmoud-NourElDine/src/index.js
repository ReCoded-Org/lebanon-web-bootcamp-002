/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked
2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/
let shoppingList = [];
shoppingList = document.getElementsByClassName("shopping-item");
console.log(shoppingList);
document.getElementById("check-all").addEventListener("click", checkAll);
function checkAll() {
  for (let i = 0; i < shoppingList.length; i++) {
    shoppingList[i].checked = true;
  }
}
document.getElementById("uncheck-all").addEventListener("click", uncheckAll);
function uncheckAll() {
  for (let i = 0; i < shoppingList.length; i++) {
    shoppingList[i].checked = false;
  }
}

let selectElement = document.getElementsByClassName("shopping-item");
for (let k = 0; k < selectElement.length; k++) {
  selectElement[k].addEventListener("change", (event) => {
    const log = document.getElementById("log");
    if (shoppingList[k].checked === false) {
      log.innerHTML += `You disliked ${event.target.value}`;
      log.innerHTML += "<br>";
    } else {
      log.innerHTML += `You like ${event.target.value}`;
      log.innerHTML += "<br>";
    }
  });
}
