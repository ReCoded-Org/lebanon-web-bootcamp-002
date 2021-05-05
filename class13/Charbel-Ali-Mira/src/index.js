const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");
searchBtn.addEventListener("click", () => {
  let query = searchText.value;
  console.log("hii");
  fetchImages(query);
});

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
      console.log(json);
      renderImage(json);
    });
}
function renderImage(json) {
  console.log(json.data.length);
  for (let i = 0; i < json.data.length; i++) {
    imagesDiv.innerHTML += `
    <img src=${json.data[i].images.original.url}/>
    `;
  }
}
