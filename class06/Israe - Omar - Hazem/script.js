// step 1: change the text inside h1 into "Hello there!"
let h1_hello = document.querySelector("h1");
h1_hello.innerHTML = "<h1 id='heading'>Hello There!</h1>";

// step 2: add the class "small-txt" to all h2 elements

let h2 = document.querySelector("h2");
h2.classList.add("small-txt");

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML

let div3 = document.getElementsByClassName("container")[0];
div3.innerHTML =
  "<form id='form1' method='post' action='new.php'> \n\
<input type='text' id='textid' name='subdomain' value='Name' /><br /> \n\
<input type='button' id='button2' name='submit2' value='add'/></form>";

// step 4: change the style of the added text input to have 100% width;

document.getElementById("textid").style.width = "100%";

// step 5: create an array with the team members names in it

let team = ["Israe ", " Omar ", " Hazem"];

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma

let foot = document.querySelector("body");

foot.innerHTML += `<p> Implemented with love by : ${team} </p>`;
