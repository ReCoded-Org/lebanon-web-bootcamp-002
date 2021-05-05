// Step 1: Read all the dom elements that you will use (forms, inputs, lists)
let title = document.getElementById("title");
let desc = document.getElementById("description");
let articleBody = document.getElementById("article-body");
let postBtn = document.getElementById("postBtn");
let articleList = document.getElementById("articles-list");
// Step 2: Save the base api url in a constant
// BASE URI: http://wisam-blog.herokuapp.com/api
const url = "http://wisam-blog.herokuapp.com/api";
// Step 3: Initialize a token holder constant with the value
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdiNDQ2NzVlMmI0MDAxNzUyNWM4NCIsInVzZXJuYW1lIjoid2lzYW0iLCJleHAiOjE2MTIxMDczMzQsImlhdCI6MTYwNjkyMzMzNH0.8Q3c1qxlcHYPfMh1v-TTDC7UmZhxSKeOS9NXUHUu554
*/
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho";
// Step 4: Create a function that takes a the article createdAt time representation and convert it to a readable date string
function createdAt(date) {}

// Step 5: Create a function that fetches all the articles and render them using the function below.
// Articles endpoint is: http://wisam-blog.herokuapp.com/api/articles
function fetchArticles() {
  return fetch("https://wisam-blog.herokuapp.com/api/articles")
    .then((response) => response.json())
    .then((json) => render(json));
}
console.log(fetchArticles());
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
function render(data) {
  for (let i = 0; i < data.articles.length; i++) {
    if (data.articles[i].body !== "") {
      articleList.insertAdjacentHTML(
        "beforeend",
        `<li>${data.articles[i].body}</li><br>`
      );
    }
  }
}
// Step 7: create a callback function for the post form submit event handler. It posts the article
// to the server and render the response.
// The request need to have the Authorization header equals to `Token ${token}`

// Articles endpoint: http://wisam-blog.herokuapp.com/api/articles
// The endpoint expects this object
/*
const dataToPost = {
        "article": {
            "title": title.value,
            "body": article.value,
            "description": description.value
        }
    }
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
function post(event) {
  event.preventDefault();
  const dataToPost = {
    article: {
      title: title.value,
      body: articleBody.value,
      description: desc.value
    }
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(dataToPost)
  };

  fetch(
    "https://wisam-blog.herokuapp.com/api/articles",
    options
  ).then((response) => console.log(response));
}
// Step 8: Atach the event listeners to the post form
postBtn.addEventListener("click", post);
// Step 9: Load the articles when document loads :)

// ENJOY 😈😈👽🤓🤭🤪
/*
Signup: https://wisam-blog.herokuapp.com/api/users

Body: {
	"user": {
		"username": "osama",
		"email": "osama@gmail.com",
		"password": "12345678"
	}
}

Login: https://wisam-blog.herokuapp.com/api/users/login

Body: { 
  "user":
    {
       "email": "osama@gmail.com",
       "password": "12345678" 
    }
}

response for both of them

{
    "user": {
        "username": "osama",
        "email": "osama@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDI1MzIsImlhdCI6MTYxOTYxODUzMn0.gGlJYJKUhI1Zw_M7NIHUsFZg8efEzWRbsdf7elWS4X0"
    }
}
*/
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     Authorization: `Token ${token}`
//   },
//   body: JSON.stringify({
//     user: {
//       username: "osama",
//       email: "osama@gmail.com",
//       password: "12345678"
//     }
//   })
// };

// fetch("https://wisam-blog.herokuapp.com/api/users", options).then((response) =>
//   console.log(response)
// );
