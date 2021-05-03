const BASE_URL = "https://api.github.com/search/users";

const search = document.getElementById("search");
const sub = document.getElementById("github-form");

sub.addEventListener("submit", (e) => {
  e.preventDefault();
  const Name = search.value;
  const url = `${BASE_URL}?q=${Name}`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json);
      htmlName(json);
    });
});
const ulUser = document.getElementById("user-list");
const ulRepo = document.getElementById("repos-list");

function htmlName(json) {
  for (let elt in json.items) {
    ulUser.innerHTML += `
    <li id="li">
    Name:${json.items[elt].login}
    <img src="${json.items[elt].avatar_url}" style="width:10% ,height:10%"/>
    </li>
     `;
    let li = document.getElementById("li");
    li.addEventListener("click", () => {
      fetch(`${json.items[elt].repos_url}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          displayRepoUl(json);
        });
    });
  }
}

function displayRepoUl(json) {
  for (let i in json) {
    ulRepo.innerHTML += `
  <li id="li">
  name:${json[i].name}<br>
  id:${json[i].id}<br>
  languages:${json[i].languages_url}
  </li>
   `;
  }
}
