const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

// document.addEventListener("DOMContentLoaded", function () {
searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");
searchBtn.addEventListener("click", () => {
  let query = searchText.value;
  imagesDiv.innerHTML = "";
  fetchImages(query);
});
// });

function fetchImages(query, offset = 0) {
  // query.preventDefault();
  // API: https://developers.giphy.com/docs/api/endpoint/#search
  const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
  const url = `
    https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`;
  console.log(`before fetching`);
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);
      renderImages(json);
    })
    .catch(function (e) {
      console.log("error");
    });
}
function renderImages(json) {
  imagesDiv.innerHTML = "";
  let array = json.data;
  for (let i = 0; i < array.length; i++) {
    imagesDiv.innerHTML += `<img src=${array[i].images.downsized.url}>`;
  }
}
