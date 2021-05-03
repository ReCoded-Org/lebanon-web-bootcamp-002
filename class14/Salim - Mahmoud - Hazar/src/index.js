// instructions here
// https://github.com/learn-co-curriculum/js-github-project

const form = document.getElementById("github-form");
const input = document.getElementById("search");
const repo = document.getElementById("repos-list");
const user = document.getElementById("user-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let url = `https://api.github.com/users/${input.value}/repos`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      for (const element of json) {
        // repo.innerHTML += `<li>${element["name"])}</li>`;
        repo.insertAdjacentHTML("beforeend", `<li>${element["name"]}</li>`);
      }
      user.insertAdjacentHTML(
        "beforeend",
        `<li>Name: ${json[0].owner.login}</li>`
      );
      user.insertAdjacentHTML(
        "beforeend",
        `<li>Avatar: ${json[0].owner["avatar_url"]}</li>`
      );
      user.insertAdjacentHTML(
        "beforeend",
        `<li>Link: ${json[0].owner["html_url"]}</li>`
      );
    });
});
