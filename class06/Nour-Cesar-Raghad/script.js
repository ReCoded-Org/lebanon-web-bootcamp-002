document.addEventListener("DOMContentLoaded", (event) => {
  console.log("start app");
  addInput();
});

// step 1: change the text inside h1 into "Hello there!"
let HelloThere = document.querySelector("#heading");
HelloThere.textContent = "Hello there!";


// step 2: add the class "small-txt" to all h2 elements
let small_text = document.querySelector("h2");
small_text.className = "small-txt";

// step 3: grab the container div and append a
// form with 1 text input and 1 submit input to it using innerHTML

function addInput() { 
  // let input = document.getElementsByClassName("container");
  let input = document.querySelector("div.container");

  console.log(input);
  input.innerHTML = '<input type="text" value="input"><button>Submit</button>';
  // let button = document.getElementsByClassName("container");
  // input.innerHTML += "<button>Submit</button>";

  // step 4: change the style of the
  //added text input to have 100% width;
  console.log(input.innerHTML);
  let text = document.querySelector("div input");
  text.style.width = "100%";
}
// step 5: create an array with
//the team members names in it

let array = ["Cesar", " Nour", " Raghad"];

// step 6: append a footer element to the body with a signature
// that says "Implement with love by: " and put each item in the
// array in here separated by a comma
let footer = document.querySelector("body");
footer.innerHTML +=
  "<footer>Implement with love by: " + array + "." + "</footer>";
