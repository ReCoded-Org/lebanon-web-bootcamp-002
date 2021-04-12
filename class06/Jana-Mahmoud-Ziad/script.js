// step 1: change the text inside h1 into "Hello there!"
document.getElementsByTagName("h1")[0].innerText = "Hello There!";
// step 2: add the class "small-txt" to all h2 elements

document.querySelectorAll("h2")[0].classList.add("small-txt");
document.querySelectorAll("h2")[1].classList.add("small-txt");
// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let x = document.getElementsByClassName("container")[0];
x.innerHTML += "<input placeholder=Name type=text></input>";
x.innerHTML += "<br>";
x.innerHTML += "<br>";
x.innerHTML += "<button>add</button>";
// step 4: change the style of the added text input to have 100% width
// y.style.size = 100;
document.getElementsByTagName("input")[0].style.width = "100%";
// step 5: create an array with the team members names in it
let Names = ["Jana", "Mahmoud", "Ziad"];
let NamesS = Names.toString();
//var Names = ["Jana", "Mahmoud", "Ziad"];
//console.log(Names[0]);
// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
function createFooter(Names) {
  document.getElementsByClassName(
    "container"
  )[0].innerHTML += `<p> Implement with love by ${Names}</p>`;
}

createFooter(NamesS);
