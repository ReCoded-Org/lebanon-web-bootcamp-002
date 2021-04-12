// step 1: change the text inside h1 into "Hello there!"
document.getElementById("heading").innerText = "Hello There!";
// step 2: add the class "small-txt" to all h2 elements
let h2List = document.getElementsByTagName("h2");
for (let i = 0; i < h2List.length; i++) {
  h2List[i].className = "small-txt";
}
// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let container = document.getElementsByClassName("container")[0];
container.innerHTML +=
  "<form><input type='text value='name' id='name'><br><input type='button' value='add'></form>";

// step 4: change the style of the added text input to have 100% width
const wid = (document.getElementById("name").style.width = "100%");

// step 5: create an array with the team members names in it
const team = ["Karen chehade", "Amro dandashli", "wadad al zein"];
// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
let parent = document.getElementsByTagName("body")[0];
let text = team.join(", ");
parent.innerHTML +=
  "<footer><p> Implement with love by: " + text + "</p></footer>";
