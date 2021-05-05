// Step 1: Read all the dom elements that you will use (forms, inputs, lists)
let form = document.getElementById("post-form");
let title = document.getElementById("title");
let description = document.getElementById("description");
let article = document.getElementById("article-body");
let subBtn = document.getElementById("btn");
const dataToPost = {
  article: {
    title: title.value,
    body: article.value,
    description: description.value
  }
};
let ul = document.getElementById("articles-list");

// Step 2: Save the base api url in a constant
// BASE URI: https://wisam-blog.herokuapp.com/api
const url = "https://wisam-blog.herokuapp.com/api";
// Step 3: Initialize a token holder constant with the value

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdiNDQ2NzVlMmI0MDAxNzUyNWM4NCIsInVzZXJuYW1lIjoid2lzYW0iLCJleHAiOjE2MTIxMDczMzQsImlhdCI6MTYwNjkyMzMzNH0.8Q3c1qxlcHYPfMh1v-TTDC7UmZhxSKeOS9NXUHUu554

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho";
let articleURL = "https://wisam-blog.herokuapp.com/api/articles";

// Step 4: Create a function that takes a the article createdAt time representation and convert it to a readable date string

let actDate;
fetch(articleURL)
  .then((res) => res.json())
  .then((json) => {
    for (let j of json.articles) {
      let r = j.createdAt;
      let dateS = r.toString();
      let d = new Date(dateS);
      actDate =
        d.toLocaleDateString("default", { month: "short" }) +
        " " +
        d.getDate() +
        " " +
        d.getFullYear();
      return actDate;
    }
  });

// Step 5: Create a function that fetches all the articles and render them using the function below.
// Articles endpoint is: http://wisam-blog.herokuapp.com/api/articles
function fetchArticle() {
  return fetch(articleURL)
    .then((res) => res.json())
    .then((json) => renderArticles(json));
}
// Step 6:
// Create a function that renders the articles that comes back form the server
function renderArticles(json) {
  for (let i of json.articles) {
    let li = document.createElement("li");
    li.innerHTML += `<strong>article title:</strong> ${i.title} <strong> created on:</strong> ${actDate}`;
    ul.appendChild(li);
  }
}
fetchArticle();


// Step 7: create a callback function for the post form submit event handler. It posts the article  to the server and render the response.
const options = {
  method: "POST",
  headers: {
    "content-type": "application/JSON",
    Authorization: `Token ${token}`
  },
  body: JSON.stringify(dataToPost)
};
function postArticle() {
  fetch(articleURL, options).then((resp) => console.log(resp));
}
// The request need to have the Authorization header equals to `Token ${token}`

// Articles endpoint: http://wisam-blog.herokuapp.com/api/articles
// The endpoint expects this object

// And it returns this object

// { article:
//    { slug: 'test-5-8apuln',
//      title: 'Test 5',
//      description: 'TESt',
//      body: 'Test new',
//      createdAt: '2020-06-03T14:05:11.068Z',
//      updatedAt: '2020-06-03T14:05:11.068Z',
//      tagList: [],
//      favorited: false,
//      favoritesCount: 0,
//      author:
//       { username: 'osama',
//         image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
//         following: false }
//     }
// }

// Step 8: Atach the event listeners to the post form
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postArticle();
});

// Step 9: Load the articles when document loads :)

// ENJOY 😈😈👽🤓🤭🤪

// BONUS, signup new user, login that user

/*

Signup: http://wisam-blog.herokuapp.com/api/users

Body: {
	"user": {
		"username": "osama",
		"email": "osama@gmail.com",
		"password": "12345678"
	}
}


Login:


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

// Sign up function

let signUpurl = "https://wisam-blog.herokuapp.com/api/users";
let Btn1 = document.getElementById("btn1");
let username = document.getElementById("userName").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

function signUp() {
  let newUser = {
    Body: {
      user: {
        username: username,
        email: email,
        password: password
      }
    }
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/JSON"
    },
    body: JSON.stringify(newUser)
  };

  fetch(signUpurl, options).then((resp) => console.log(resp));
}

Btn1.addEventListener("click", (ev) => {
  ev.preventDefault();
  signUp();
});

// logIn function

let logInUrl = "https://wisam-blog.herokuapp.com/api/users/login";
let btn2 = document.getElementById("btn2");
let emailLog = document.getElementById("emailLog").value;
let passwordLog = document.getElementById("passwordLog").value;


function signIn() {
  fetch(logInUrl)
    .then((resp) => resp.json())
    .then((json) => {
      for (let i in json.user) {
        if (i.email === emailLog && i.password === passwordLog) {
          alert("valid email");
        } else {
          alert("Wrong email/password!");
        }
      }
    });
}
btn2.addEventListener("click", (eve) => {
  eve.preventDefault();
  signIn();
});
// /* Article response look like this
// res =
// { articles:
//    [ { slug: 'new-token-test-o8cbbl',
//        title: 'New Token Test',
//        description: 'bah',
//        body: 'blah blah',
//        createdAt: '2020-06-03T13:44:08.349Z',
//        updatedAt: '2020-06-03T13:44:08.349Z',
//        tagList: [],
//        favorited: false,
//        favoritesCount: 0,
//        author: [Object] },
//      { slug: '-dg152z',
//        title: '',
//        description: '',
//        body: '',
//        createdAt: '2020-06-03T13:39:47.471Z',
//        updatedAt: '2020-06-03T13:39:47.471Z',
//        tagList: [],
//        favorited: false,
//        favoritesCount: 0,
//        author: [Object] }
//     ]
// }
// */
