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

const moviesList = document.getElementById("movies");
const btnRate = document.getElementById("rate");
const btnDate = document.getElementById("date");

const url =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";
let dataArr = [];

fetch(url)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    dataArr = json.Episodes;
    displayData();
  });

function displayData() {
  moviesList.innerHTML = "";
  dataArr.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `Episode name: ${element.Title} </br> Release date: ${element.Released}<br> Episode number: ${element.Episode} <br> Rate:${element.imdbRating} `;

    moviesList.appendChild(li);
  });
}

btnRate.addEventListener("click", sortByRate);

function sortByRate() {
  dataArr.sort(function (a, b) {
    return a.imdbRating - b.imdbRating;
  });
  displayData();
}

btnDate.addEventListener("click", sortByDate);

function sortByDate() {
  dataArr.sort(function (a, b) {
    return new Date(a.Released) - new Date(b.Released);
  });
  displayData();
}
