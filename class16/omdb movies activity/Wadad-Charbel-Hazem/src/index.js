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
let url =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";
let ul = document.getElementById("movies");

async function fetchMovies() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(res);
  console.log(data);
  return renderMovies(data);
}
fetchMovies();

function renderMovies(json) {
  json.Episodes.forEach(function (episode) {
    ul.innerHTML += `<li>
Episode title: ${episode.Title}<br>
Release date:${episode.Released}<br>
Episode number: ${episode.Episode}<br>
Rating: ${episode.imdbRating}</li>`;
  });
}
let button1 = document.getElementById("rate");
let button2 = document.getElementById("date");



button1.addEventListener("click", (e) => {
  async function fetchMovie() {
  const res = await fetch(url);
  const data = await res.json();
  return sortRate(data);
}
fetchMovie();

   function sortRate(json) {
    let arrayA = json.Episodes.sort(function (e1, e2) {
      return e1.imdbRating - e2.imdbRating;
        });

    ul.innerHTML = "";
    arrayA.forEach((episode) => {
      
      ul.innerHTML += `<li>
      Episode title: ${episode.Title}<br>
      Release date:${episode.Released}<br>
      Episode number: ${episode.Episode}<br>
      Rating: ${episode.imdbRating}</li>`;
  
    });
  }
});

button2.addEventListener("click", (e) => {
  async function fetchMovie() {
  const res = await fetch(url);
  const data = await res.json();
  return sortDate(data);
}
fetchMovie();

   function sortDate(json) {
    let arrayB= json.Episodes.sort(function (e1, e2) {
      let a = new Date(e1.Released);
      let b = new Date(e2.Released);
      return a-b;
        });

    ul.innerHTML = "";
    arrayB.forEach((episode) => {
      
      ul.innerHTML += `<li>
      Episode title: ${episode.Title}<br>
      Release date:${episode.Released}<br>
      Episode number: ${episode.Episode}<br>
      Rating: ${episode.imdbRating}</li>`;
  
    });
  }
});

