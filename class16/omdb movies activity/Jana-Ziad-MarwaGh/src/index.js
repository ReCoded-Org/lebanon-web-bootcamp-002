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
let ul = document.getElementById("movies");
let rate = document.getElementById("rate");
let date = document.getElementById("date");
let moviesURL =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";

function fetchMovies() {
  return fetch(moviesURL)
    .then((res) => res.json())
    .then((json) => renderMovies(json));
}
function renderMovies(json) {
  json.Episodes.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `Episode: ${el.Episode} Tile: ${el.Title} Released on: ${el.Released} IMDB rating: ${el.imdbRating}`;
    ul.appendChild(li);
  });
}

fetchMovies();

rate.addEventListener("click", (e) => {
  fetch(moviesURL)
    .then((res) => res.json())
    .then((json) => sortRate(json));

  function sortRate(json) {
    // console.log(json)
    let arr1 = json.Episodes.sort(function (e1, e2) {
      return e1.imdbRating - e2.imdbRating;
    });
    ul.innerHTML = "";
    arr1.forEach((el) => {
      let li = document.createElement("li");
      li.innerHTML = `Episode: ${el.Episode} Tile: ${el.Title} Released on: ${el.Released} IMDB rating: ${el.imdbRating}`;
      ul.appendChild(li);
    });
  }
});

date.addEventListener("click", (e) => {
  fetch(moviesURL)
    .then((res) => res.json())
    .then((json) => sortDate(json));

  function sortDate(json) {
    // console.log(json)
    let arr1 = json.Episodes.sort(function (e1, e2) {
      let date = new Date(json.Episodes.Released);
      return date.getTime() - date.getTime();
    });
    ul.innerHTML = "";
    arr1.forEach((el) => {
      let li = document.createElement("li");
      li.innerHTML = `Episode: ${el.Episode} Tile: ${el.Title} Released on: ${el.Released} IMDB rating: ${el.imdbRating}`;
      ul.appendChild(li);
    });
  }
});
