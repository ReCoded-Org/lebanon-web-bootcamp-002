const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

// document.addEventListener("DOMContentLoaded", function () {
searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");
searchBtn.addEventListener("click", (e) => {
  let query = searchText.value;
  imagesDiv.innerHTML = "";
  fetchImages(query);
  e.preventDefault();
});
// });

function fetchImages(query, offset = 0) {
  // API: https://developers.giphy.com/docs/api/endpoint/#search
  const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
  const url = `
    https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      displayGiphy(json);
    });
}

function displayGiphy(json) {
  for (let i in json.data) {
    imagesDiv.innerHTML += `
    <img src="${json.data[i].images.original.url}">
    `;
  }
}
