/* you have this api url

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
const rateButton = document.getElementById("rate");
const dateButton = document.getElementById("date");
const ul = document.getElementById("movie");
const url =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";

let episodesObj = [];
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    let list = generateList(json.Episodes);
    generateDom(list);

    rateButton.addEventListener("click", function (e) {
      e.preventDefault();
      sortByRate(list);
    });

    dateButton.addEventListener("click", function (e) {
      e.preventDefault();
      sortByDate(list);
    });
  });

function generateList(episodes) {
  let result = episodes.map(function (episode) {
    let obj = {
      Title: episode.Title,
      Released: episode.Released,
      Episode: episode.Episode,
      Rating: episode.imdbRating,
    };
    return obj;
  });
  return result;
}

function generateDom(list) {
  ul.innerHTML = "";
  list.forEach(function (item) {
    episodesObj.push(item);
    ul.innerHTML += `<li>
    Title: ${item.Title}
    <br>
    Released: ${item.Released}
    <br>
    Episode: ${item.Episode}
    <br>
    Rating: ${item.Rating}
    </li>`;
  });
}

function sortByRate(list) {
  let result = list.sort(function (ep1, ep2) {
    return ep1.Rating - ep2.Rating;
  });
  generateDom(result);
}

function sortByDate(list) {
  let result = list.sort(function (ep1, ep2) {
    let date1 = new Date(ep1.Released);
    let date2 = new Date(ep2.Released);
    if (date1 > date2) {
      return 1;
    }
    if (date2 > date1) {
      return -1;
    }
    return 0;
  });
  generateDom(result);
}
