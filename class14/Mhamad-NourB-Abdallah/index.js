// instructions here
// https://github.com/learn-co-curriculum/js-github-project

const userInput = document.getElementById("search");
const submit = document.querySelectorAll("input")[1];
const userList = document.getElementById("user-list");
const repoList = document.getElementById("repos-list");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  fetchUsers();
});

function fetchUsers() {
  const urlUsers = `https://api.github.com/search/users?q=${userInput.value}`;
  fetch(urlUsers)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (json) {
      // console.log(json);
      renderUsers(json);
    });
}

function renderUsers(json) {
  userList.innerHTML = "";
  for (let i = 0; i < json.items.length; i++) {
    userList.insertAdjacentHTML(
      "beforeend",
      `<div class='container'><span>${json.items[i].login}</span><a href = ${json.items[i]["html_url"]}>${json.items[i]["html_url"]}</a><img src="${json.items[i]["avatar_url"]}"</div>`
    );
    let span = document.querySelectorAll("span");
    span[span.length - 1].addEventListener("click", (e) => {
      fetchRepo(e.target.innerHTML);
    });
  }
}

function fetchRepo(user) {
  const urlRepos = `https://api.github.com/users/${user}/repos`;
  fetch(urlRepos)
    .then((resp) => resp.json())
    .then((json) => {
      renderRepo(json);
      console.log(json);
    });
}

function renderRepo(json) {
  repoList.innerHTML = "";
  for (let i = 0; i < json.length; i++) {
    userList.insertAdjacentHTML(
      "beforeend",
      `<li>${json[i]["full_name"]}</li>`
    );
  }
}
