let submit = document.getElementById("submit");
let input = document.getElementById("search");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let URL = `https://api.github.com/search/users?q=${input.value}`;
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let userList = document.getElementById("user-list");
      //for (let i = 0; i < json.length; i++) {
      for (let i in json.items) {
        let LI = document.createElement("li");
        userList.appendChild(LI);
        LI.innerHTML += `<span>${json.items[i].login}</span>
        <br> <img src="${json.items[i].avatar_url}">
        <br> <a href="${json.items[i].html_url}"> ${json.items[i].html_url}</a>`;
        //let login = LI.children[0];
        //console.log(login);
        let user = document.getElementsByTagName("span")[i];
        user.addEventListener("click", (e) => {
          //e.preventDefault();
          let reposList = document.getElementById("repos-list");
          let LI1 = document.createElement("li");
          let URL2 = `https://api.github.com/users/${json.items[i].login}/repos`;
          fetch(URL2)
            .then(function (response) {
              return response.json();
            })
            .then(function (json) {
              reposList.appendChild(LI1);
              json.forEach((element) => {
                LI1.innerHTML += element.name + "<br>" + element.html_url;
              });

              console.log(json);
              //console.log(json);
            });
        });
      }
    });
});
