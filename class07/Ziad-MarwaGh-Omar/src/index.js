/* Instructions

1- Implement the Check all button functionality, when clicked all check boxes should become checked

2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/
function checkAll(c) {
  for (let i = 0; i < c.length; i++) c[i].checked = true;
}
function unCheckAll(c) {
  for (let i = 0; i < c.length; i++) c[i].checked = false;
}
