import "./styles.css";

let url =
  "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=8&apikey=eea7a7a0";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    renderEps(json);
  });

function renderEps(json) {
  let newArray = json.Episodes.map((data) => data);
  returnData(newArray);
  sortRate(newArray);
  sortDate(newArray);
}
let ul = document.getElementById("movies");

function returnData(newArray) {
    newArray.forEach((elem) => {
    let li = document.createElement("li");
    li.innerHTML = `Title: ${elem.Title}<b><br>
    Release date:${elem.Released}<b><br>
    Episode Number:${elem.Episode} <b><br>
    Rating:${elem.imdbRating}`;
    ul.appendChild(li);
  });
}

function sortRate(newArray) {
    let sortRate = document.getElementById("sortRate");
    sortRate.addEventListener("click", function (e) {
    ul.innerHTML = "";
    newArray.sort(function (g1, g2) {
      return g2.imdbRating - g1.imdbRating;
    });
    newArray.forEach((elem) => {
      let li = document.createElement("li");
      li.innerHTML = `Title: ${elem.Title}<b><br>
      Release date:${elem.Released}<b><br>
      Episode Number:${elem.Episode} <b><br>
      Rating:${elem.imdbRating}`;
      ul.appendChild(li);
    });
  });
}

function sortDate(newArray) {
  let sortDate = document.getElementById("sortDate");
  sortDate.addEventListener("click", function (e) {
  ul.innerHTML = "";
  newArray.sort(function (g1, g2) {
      return new Date(g2.Released).getTime() - new Date(g1.Released).getTime();
    });
    newArray.forEach((elem) => {
      let li = document.createElement("li");
      li.innerHTML = `Title: ${elem.Title}<b><br>
      Release date:${elem.Released}<b><br>
      Episode Number:${elem.Episode} <b><br>
      Rating:${elem.imdbRating}`;
      ul.appendChild(li);
    });
  });
}
