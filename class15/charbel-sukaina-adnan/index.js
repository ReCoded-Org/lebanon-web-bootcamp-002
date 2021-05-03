// Step 1: Read all the dom elements that you will use (forms, inputs, lists)
const postForm = document.getElementById("post-form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const article = document.getElementById("article-body");
const mainHero = document.getElementsByClassName("main__hero");
const ul = document.getElementById("articles-list");
// Step 2: Save the base api url in a constant
// BASE URI: http://wisam-blog.herokuapp.com/api
const url = "https://wisam-blog.herokuapp.com/api/articles";
// Step 3: Initialize a token holder constant with the value
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdiNDQ2NzVlMmI0MDAxNzUyNWM4NCIsInVzZXJuYW1lIjoid2lzYW0iLCJleHAiOjE2MTIxMDczMzQsImlhdCI6MTYwNjkyMzMzNH0.8Q3c1qxlcHYPfMh1v-TTDC7UmZhxSKeOS9NXUHUu554
*/
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho`;
// Step 4: Create a function that takes a the article createdAt time representation and convert it to a readable date string
document.addEventListener("DOMContentLoaded", hello);

function hello() {
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      // console.log(json);
      renderArticle(json);
    })
    .catch(() => console.log("error"));
  // });
}
function salam(dateString) {
  let d1 = dateString.split("T");
  //console.log(d1);
  let d2 = d1[0].split("-");
  //console.log(d2);
  let months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November"
  ];
  let f = months[parseInt(d2[1], 10)] + d2[2] + "," + d2[0];
  return f;
}
// Step 5: Create a function that fetches all the articles and render them using the function below.
// Articles endpoint is: http://wisam-blog.herokuapp.com/api/articles
function renderArticle(json) {
  //console.log(json.articles.length);
  for (let i = 0; i < json.articles.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = ` <p> Title=${json.articles[i].title} </p>
   <p> description=${json.articles[i].description} </p>
   <p> username=${json.articles[i].author.username} </p>
   <p> body=${json.articles[i].body} </p>
   <p> createdAt:${salam(json.articles[i].createdAt)}</p>`;
    ul.appendChild(li);
  }
}
// Step 6:
//Create a function that renders the articles that comes back form the server
/* Article response look like this
res =
{ articles:
   [ { slug: 'new-token-test-o8cbbl',
       title: 'New Token Test',
       description: 'bah',
       body: 'blah blah',
       createdAt: '2020-06-03T13:44:08.349Z',
       updatedAt: '2020-06-03T13:44:08.349Z',
       tagList: [],
       favorited: false,
       favoritesCount: 0,
       author: [Object] },
     { slug: '-dg152z',
       title: '',
       description: '',
       body: '',
       createdAt: '2020-06-03T13:39:47.471Z',
       updatedAt: '2020-06-03T13:39:47.471Z',
       tagList: [],
       favorited: false,
       favoritesCount: 0,
       author: [Object] }
    ]
}
*/
// Step 7: create a callback function for the post form submit event handler. It posts the article  to the server and render the response.
postForm.addEventListener("submit", send);
// The request need to have the Authorization header equals to `Token ${token}`
function send(e) {
  console.log("in");
  e.preventDefault();
  const dataToPost = {
    article: {
      title: title.value,
      body: article.value,
      description: description.value
    }
  };
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append(
  //   "Authorization",
  //   `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho`
  // );
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(dataToPost)
  };
  // fetch(url, {
  //   method: "POST",
  //   headers: myHeaders,
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   //   Authorization: `${token}`
  //   // },
  //   body: JSON.stringify(dataToPost)
  // })
  fetch("https://wisam-blog.herokuapp.com/api/articles", options)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
    })
    .catch(() => console.log("error"));
}
//
// Articles endpoint: http://wisam-blog.herokuapp.com/api/articles
// The endpoint expects this object
/*
 */
// And it returns this object
/*
{ article:
   { slug: 'test-5-8apuln',
     title: 'Test 5',
     description: 'TESt',
     body: 'Test new',
     createdAt: '2020-06-03T14:05:11.068Z',
     updatedAt: '2020-06-03T14:05:11.068Z',
     tagList: [],
     favorited: false,
     favoritesCount: 0,
     author:
      { username: 'osama',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false }
    }
}
*/
// Step 8: Atach the event listeners to the post form
// Step 9: Load the articles when document loads
