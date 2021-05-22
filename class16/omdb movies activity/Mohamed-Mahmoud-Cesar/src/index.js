/* you have this api url
http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0
it will return the episodes of game of thrones season 8,

make sure to read all the instructions before you start coding:
1. fetch the episodes and display them as a list
2. each list item should have (episode title, release date, espideo number and rating)
3. you should have a button at the top of your page that
says "sort episodes by rate" and other one say "sort episodes by release date"
when clicked they should what they say
4. you should only use arrows function
5. only use forEach() to loop
6. use sort() for sorting
*/

const URL =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";
const body = document.getElementById("app");

const sortRate = document.createElement("button");
const sortDate = document.createElement("button");
sortDate.innerText = "sort episodes by release date";
sortDate.style.marginLeft = " 15px";
sortRate.innerText = "sort episodes by rate";
body.appendChild(sortRate);
body.appendChild(sortDate);

const ul = document.createElement("ul");
body.appendChild(ul);

function sortByRate(json) {
  let arr = json.Episodes.sort(function (e1, e2) {
    return e1.imdbRating - e2.imdbRating;
  });
  ul.innerHTML = " ";
  arr.forEach((epi) => {
    ul.innerHTML += `<li>Episode: ${epi.Episode} Title: ${epi.Title}
<br> Rate : ${epi.imdbRating}
<br> Date Released : ${epi.Released}</li>`;
  });
}

function sortByDate(json) {
  let arr1 = json.Episodes.sort(function (e1, e2) {
    return new Date(e1.Released) - new Date(e2.Released);
  });
  ul.innerHTML = " ";
  arr1.forEach((epi) => {
    ul.innerHTML += `<li> Episode : ${epi.Episode} Title: ${epi.Title} 
  <br> Date Released : ${epi.Released}
  <br> Rate : ${epi.imdbRating}</li>`;
  });
}

function fetchDi() {
  return fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayEspisodes(json);
      sortDate.addEventListener("click", () => {
        sortByDate(json);
      });
      sortRate.addEventListener("click", () => {
        sortByRate(json);
      });
    });
}

fetchDi();

function displayEspisodes(json) {
  json.Episodes.forEach((epi) => {
    ul.innerHTML += `<li>Episode : ${epi.Episode} Title: ${epi.Title} 
   <br> Rate : ${epi.imdbRating}
   <br> Date Released : ${epi.Released}
   </li>`;
  });
}
