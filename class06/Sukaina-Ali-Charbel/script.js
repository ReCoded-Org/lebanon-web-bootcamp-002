// step 1: change the text inside h1 into "Hello there!"
document.getElementById(`heading`).textContent = "Hello There!";

// step 2: add the class "small-txt" to all h2 elements
const elements = document.getElementsByTagName("h2")[0];
//for (let i = 0; i < elements.length; i++);
elements.classList.add("small-txt");
console.log(elements);

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
document.getElementsByClassName("container")[0].innerHTML += `<form>
      <input type="text" value="name" placeholder="Name" id="name"/>
      <input type="submit" value="Add"/>
  </form>`;

// step 4: change the style of the added text input to have 100% width;
const change = (document.getElementById("name").style.width = "100%");

//step 5: create an array with the team members names in it
const teamNames = [" Ali", " Charbel", " Sukaina"];

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
document.getElementsByTagName("body")[0].innerHTML += `<footer>
<p>Implement with love by: ${teamNames}</p>
</footer>`;

// for (i = 0; i < teamNames.leng
//t h; i/   document.(wie)ln(i + 1 + ": " + te
