const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");
searchBtn.addEventListener("click", () => {
  let query = searchText.value;
  imagesDiv.innerHTML = "";
  console.log("hii");
  fetchImages(query);
});

function fetchImages(query, offset = 0) {
  // API: https://developers.giphy.com/docs/api/endpoint/#search
  const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
  const url = `
    https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => renderOriginalUrl(json));

}

function renderOriginalUrl(json) {
  const dd = document.getElementById("images");
  for (let i in json.data) {
    //json.data[i].images.original.url;
    const gif = document.createElement("iframe");
    gif.src = json.data[i].images.original.url;
    dd.appendChild(gif);
  }
}
