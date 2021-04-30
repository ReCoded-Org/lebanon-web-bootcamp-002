// Step 1: Read all the dom elements that you will use (forms, inputs, lists)
let form = document.getElementById("post-form");
let title = document.getElementById("title");
let description = document.getElementById("description");
let article = document.getElementById("article-body");
let ul_listt = document.getElementById("articles-list");

// Step 2: Save the base api url in a constant
// BASE URI: http://wisam-blog.herokuapp.com/api
const url = "https://wisam-blog.herokuapp.com/api";

// Step 3: Initialize a token holder constant with the value

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdiNDQ2NzVlMmI0MDAxNzUyNWM4NCIsInVzZXJuYW1lIjoid2lzYW0iLCJleHAiOjE2MTIxMDczMzQsImlhdCI6MTYwNjkyMzMzNH0.8Q3c1qxlcHYPfMh1v-TTDC7UmZhxSKeOS9NXUHUu554";

// Step 4: Create a function that takes a the article createdAt time representation and convert it to a readable date string
function convertdate(date) {
  // date.slice()
  let d = new Date(date);
  return d.toDateString();
}

// Step 5: Create a function that fetches all the articles and render them using the function below.
// Articles endpoint is: http://wisam-blog.herokuapp.com/api/articles
let URL = "https://wisam-blog.herokuapp.com/api/articles";
function getarticles() {
  fetch(URL)
    .then((response) => response.json())

    .then((
      json //console.log(json));
    ) => render(json));
   // ) => console.log(json));
}
getarticles();
// Step 6:
//Create a function that renders the articles that comes back form the server
/* Article response look like this*/

/*res = 
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
function render(json) {
  for (let i = 0; i < json.articles.length; i++) {
    let LI = document.createElement("li");
    LI.innerHTML = ` <p> Title: ${json.articles[i].title} </p>
   <p> description: ${json.articles[i].description} </p>
   <p> username: ${json.articles[i].author.username} </p>
   <p> body: ${json.articles[i].body} </p>
   <p> createdAt: ${convertdate(json.articles[i].createdAt)}</p>`;
    ul_listt.appendChild(LI);
  }
}
// Step 7: create a callback function for the post form submit event handler. It posts the article  to the server and render the response.
const dataToPost = {
  article: {
    title: title.value,
    body: article.value,
    description: description.value
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
form.addEventListener("submit", callback);
function callback(e) {
  e.preventdefault();
  
  fetch("https://wisam-blog.herokuapp.com/api/articles", options)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
    })
    .catch(() => console.log("error"));
    
    
  }

// The request need to have the Authorization header equals to `Token ${token}`

// Articles endpoint: https://wisam-blog.herokuapp.com/api/articles
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

// Step 8: Atach the event listeners to the post form

// Step 9: Load the articles when document loads :)
//window.addEventListener('DOMContentLoaded' , (event) =>{console.log('DOM fully loaded and parsed');}
//);
// ENJOY 😈😈👽🤓🤭🤪