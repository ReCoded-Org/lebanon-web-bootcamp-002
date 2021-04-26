const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

//document.addEventListener("DOMContentLoaded", function () {
searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");
searchBtn.addEventListener("click", () => {
  let query = searchText.value;
  imagesDiv.innerHTML = "";
  fetchImages(query);
});
//});

function fetchImages(query, offset = 0) {
  // API: https://developers.giphy.com/docs/api/endpoint/#search
  const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      for (const item of json.data) {
        imagesDiv.insertAdjacentHTML(
          "beforeend",
          `<img src="${item.images.downsized_large.url}">`
        );
      }
    });
}
