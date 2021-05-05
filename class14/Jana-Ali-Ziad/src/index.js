// instructions here
// https://github.com/learn-co-curriculum/js-github-project
window.addEventListener("DOMContentLoaded", ()=>{
let subBtn = document.getElementById("submitBtn");
subBtn.addEventListener("click", (e) => {
  let user = document.getElementById("search").value;
  let url = `https://api.github.com/search/users?q=${user}`;
  let url2 = `https://api.github.com/users/${user}/repos`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      displayUser(json);
    });

  fetch(url2)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      displayRepos(json);
    });
  e.preventDefault();
});

function displayUser(json) {
  let userDiv = document.getElementById("github-container");
  let ulu = document.getElementById("user-list");
  for (let i in json.items) {
    let li = document.createElement("li");
    let result = (li.innerHTML = `<a target="_blank" href=https://github.com/${json.items[i].login}?tab=repositories> user name: ${json.items[i].login} </a>`);
    ulu.appendChild(li);
    userDiv.appendChild(ulu);
    return result;
  }
}

function displayRepos(json) {
  let ulr = document.getElementById("repos-list");
  for (let i in json) {
    ulr.innerHTML += `<li> name: ${json[i].name} </li>`;
  }
}
});
