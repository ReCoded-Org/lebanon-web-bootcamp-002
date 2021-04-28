document.addEventListener("DOMContentLoaded", function () {
  const forms = document.getElementById("post-form");
  const desc = document.getElementById("description");
  const title = document.getElementById("title");
  const body = document.getElementById("article-body");
  const lists = document.getElementById("articles-list");


  const url = "https://wisam-blog.herokuapp.com/api/articles";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho";

  function fetchData() {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        formatDate(data);
      });
  }
  const data = fetchData();

  function formatDate(data) {
    for (let k of data.articles) {
      const datecre = k.createdAt;
      const str = datecre.toString();
      const date =new Date(str);
      const date_value =date.toLocaleString("en-US",{year: 'numeric',month: 'long', day: 'numeric' });
      return date_value;
    }
  }


  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      renderArticle(json);
    });

  function renderArticle(json) {
    forms.reset();
    for (let i in json.articles) {
      let li = document.createElement("li");
      li.innerHTML += `<b>Article Title </b>${json.articles[i].title}
      <b>Date : </b>${formatDate(json)}`;
      lists.appendChild(li);
    }
  }
  function callback(event) {
    event.preventDefault();

    const dataToPost = {
      article: {
        title: title.value,
        body: body.value,
        description: desc.value
      }
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(dataToPost)
    };

    console.log(JSON.stringify(dataToPost));
    fetch(url, configObj)
      .then((res) => res.json())
      .then((json) => {
        renderArticle(json);
        console.log(json);
      });
  }

  let submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", callback);
});
