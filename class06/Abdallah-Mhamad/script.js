// step 1: change the text inside h1 into "Hello there!"
document.querySelector("h1").innerText = "Hello world!";
// step 2: add the class "small-txt" to all h2 elements
let h2 = document.querySelectorAll("h2");
for (let i = 0; i < h2.length; i++) {
  h2[i].classList.add("small-txt");
}
// step 3: grab the container div and append a form with 1 text input
//and 1 submit input to it using innerHTML
let div = document.getElementsByClassName("container");
div[0].innerHTML +=
  "<form><input id='first' type='text' name='input1' value='Name'><input type='button' value='add' onclick='addImplement()'></form></div>";
// step 4: change the style of the added text input to have 100% width;
document.getElementById("first").style.width = "100%";
// step 5: create an array with the team members names in it
let team = ["Mhammad", "Abdallah"];
// step 6: append a footer element to the body with a signature that says
//"Implement with love by: " and put each item in the array
//in here separated by a comma
let body = document.querySelector("body");
body.innerHTML += `<footer>Implement with love by: ${team[0]}, ${team[1]} :)</footer>`;

function addImplement()
{
  team.push(document.getElementById("first").value);
  let teamMembers = "";
  for(let i=0;i<team.length-1;i++)
  {
    teamMembers += team[i] + ", ";
  }
  teamMembers += team[team.length-1] + " ";
  document.querySelector("footer").innerText = `Implement with love by: ${teamMembers} :)`; 
}
