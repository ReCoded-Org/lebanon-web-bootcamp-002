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
let array = [];
const ul = document.getElementById("movies");
function render(arr) {
  console.log(arr);
  ul.innerHTML = "";
  arr.forEach((el) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li><div><p>Title: ${el.Title}</p><p>Release date: ${el.Released}</p><p>Episode: ${el.Episode}</p><p>Rating: ${el.imdbRating}</p></div></li><br>`
    );
  });
}

fetch("https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    render(json.Episodes);
    array = json.Episodes;
  });

document.getElementById("rate").addEventListener("click", () => {
  array.sort((a, b) => b.imdbRating - a.imdbRating);
  render(array);
});

document.getElementById("date").addEventListener("click", () => {
  array.sort((a, b) => {
    let d1 = Date.parse(a.Released);
    let d2 = Date.parse(b.Released);
    return d1 - d2;
  });
  render(array);
});
