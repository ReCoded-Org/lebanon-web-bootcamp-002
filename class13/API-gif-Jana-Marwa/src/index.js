const LIMIT = 5;
let imagesDiv;
let searchBtn;
let searchText;

searchBtn = document.querySelector("#searchBtn");
searchText = document.querySelector("#searchText");
imagesDiv = document.querySelector("#images");

document.addEventListener("DOMContentLoaded", function () {
searchBtn.addEventListener("click", (e) => {
e.preventDefault();  //to stop page reload 
  let query = searchText.value;
  //imagesDiv.innerHTML = "";
  fetchImages(query);
});
});



/*function fetchImages(query, offset = 0) {
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
      // renderImages(json);
    });
}*/




function fetchImages(query, offset = 0) {
    // API: https://developers.giphy.com/docs/api/endpoint/#search
    const KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
    const url = `
      https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`; 
    fetch(url)
    .then (response =>response.json())
    .then (content =>{
    // we had data, pagination, meta property
    console.log(content,data)
    console.log("META",content.meta);

    let array = json.data;

    for (let i=0; i< array.length;i++){

    let fig = document.createElement('figure');          //for imagesDiv.innerHTML above
    let img = document.createElement('img');
    let fc = document.createElement('figcaptions');
    img.src = content.data[i].images.downsized.url;
    img.alt = content.data[i].title;
    fc.textcontent = content.data[i].title;
    fig.appendChild(img);
    fig.appendChild(fc);
  
    
    imagesDiv.insertAdjacentElement('afterbegin', fig);   //and not appendchild so that new El appear at top and user dont have to scroll down each time he adds a new gif
    document.querySelector('#searchText').value =''; // to empty the input field after searchBtn is clicked
    }
    })
.catch(err=> {
    console.error(err);
})
}
