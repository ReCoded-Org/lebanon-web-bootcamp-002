// step 1: change the text inside h1 into "Hello there!"
let heading1 = document.getElementById("heading");
heading1.textContent = "Hello!";
console.log(heading1);

// step 2: add the class "small-txt" to all h2 elements
let name = document.querySelectorAll("h2");
for (let i = 0; i < name.length; i++) {
  name[i].className = "small-txt";
}
console.log(name);

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let myDiv = document.getElementsByClassName("container")[0];
myDiv.innerHTML = '<form> <input type="text"/> <input type="submit"/> </form>';
console.log(myDiv);

// step 4: change the style of the added text input to have 100% width;
document.querySelector("div form input").style.width = "99%";
console.log(myDiv);

// step 5: create an array with the team members names in it
let names = ["Salim Al Mersally", "Mira Chami"];

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
let myBody = document.querySelector("body");
myBody.innerHTML += "<footer></footer>";
let myFooter = document.querySelector("body footer");
let text = names.join(", ");
myFooter.innerHTML = "Implement with love by: " + text;

console.log(myBody);
console.log(myFooter);
