const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let query = searchText.value;
  imagesDiv.innerHTML = "";
  fetchImages(query);
});

function fetchImages(query, offset = 0) {
  // API: https://developers.giphy.com/docs/api/endpoint/#search
  const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);
      console.log(json.data[0].images.original.url);
      for (let i = 0; i < json.data.length; i++) {
        imagesDiv.insertAdjacentHTML(
          "beforeend",
          `<img src="${json.data[i].images.original.url}">`
        );
      }
    });
}
