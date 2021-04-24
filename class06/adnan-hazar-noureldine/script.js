// step 1: change the text inside h1 into "Hello there!"

// step 2: add the class "small-txt" to all h2 elements

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML

// step 4: change the style of the added text input to have 100% width;

// step 5: create an array with the team members names in it

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma

const heading = document.getElementById("heading");
heading.innerText = "Hello There!";
// step 1 done

const le = document.getElementsByTagName("h2");
for (let i = 0; i < le.length; i++) {
  le[i].className += "small-txt";
}
// step 2 done

document.querySelector(".container").innerHTML = `<form>
<input type="text" id="fname" name="fname" placeholder="Name" onchange="myFunction()">
<input type="submit" value="add">
</form>`;
// step 3 done

document.getElementById("fname").style.width = "100%";
// step 4 done

const arr = ["adnan", "hazar", "noureldine"];
// step 5 done

let footer0 = document.createElement("footer");
document.body.appendChild(footer0);
const footer = document.querySelector("footer");
footer.innerText = "Implement with love by ";
for (let i = 0; i < arr.length - 1; i++) {
  footer.innerText += ` ${arr[i]},`;
}
footer.innerText += ` ${arr[arr.length - 1]}`;
// step 6 done
