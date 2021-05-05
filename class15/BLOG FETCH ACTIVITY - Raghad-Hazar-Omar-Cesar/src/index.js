// Step 1: Read all the dom elements that you will use (forms, inputs, lists)

// Step 2: Save the base api url in a constant
// BASE URI: http://wisam-blog.herokuapp.com/api/articles
document.addEventListener("DOMContentLoaded", () => {
  const URL = "https://wisam-blog.herokuapp.com/api/articles";

  // Step 3: Initialize a token holder constant with the value

  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdiNDQ2NzVlMmI0MDAxNzUyNWM4NCIsInVzZXJuYW1lIjoid2lzYW0iLCJleHAiOjE2MTIxMDczMzQsImlhdCI6MTYwNjkyMzMzNH0.8Q3c1qxlcHYPfMh1v-TTDC7UmZhxSKeOS9NXUHUu554

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODk2YTQ1YTkxZWQ5MDAxNzM1ZTI0YiIsInVzZXJuYW1lIjoib3NhbWEiLCJleHAiOjE2MjQ4MDIzNzQsImlhdCI6MTYxOTYxODM3NH0.3bB1_3uIK5XXh6Sxm1t8RoLpY9zwbKU6QcqNgO-uVho";

  // Step 4: Create a function that takes a the article createdAt time
  // representation and convert it to a readable date string

  function x(date) {
    return fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        for (let i = 0; i < json.articles.length; i++) {
          let created = json.articles[i].createdAt;
          let d = new Date(created);
          d.toDateString();
          let createdAtDate =
            d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        }
      });
  }
  // Step  Create a function that fetches all the articles and render them using the function below.
  // Articls endpoint is: http://wisam-blog.herokuapp.com/api/articles
  //
  function render() {
    return fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let articles = [];
        // let res = {};
        for (let i = 0; i < json.articles.length; i++) {
          let obj = {
            slug: json.articles[i].slug,
            title: json.articles[i].title,
            description: json.articles[i].description,
            body: json.articles[i].body,
            createdAt: json.articles[i].createdAt,
            updatedAt: json.articles[i].updatedAt,
            tagList: json.articles[i].tagList,
            favorited: json.articles[i].favorited,
            favoritesCount: json.articles[i].favoritesCount,
            author: {
              username: json.articles[i].author.username,
              image: json.articles[i].author.image,
              following: json.articles[i].author.following
            }
          };
          articles.push(obj);
          //console.log(obj);
          // let articleList = document.getElementById("articles-list");
          // let li rticleLis.appendChild(li);  rti cle.push(obj);li.innerHTM += `${articles}`;
          let articleList = document.getElementById("articles-list");
          articleList.innerHTML += `<li>Slug: ${obj.slug}<br>Title: ${obj.title}<br>Description: ${obj.description}
        <br>Body: ${obj.body}<br>Created At: ${obj.createdAt}<br>Updated At: ${obj.updatedAt}<br>Tag List: ${obj.tagList}<br>Favorited: ${obj.favorited}
        <br>Favorites Count: ${obj.favoritesCount}<br>Author:<br>Username: ${obj.author.username}
        <br>Image:<br><img src="${obj.author.image}"><br>Following: ${obj.author.following}<br><br></li>`;
        }
        let res = { articles };
        // articles.push(res);
        console.log(res);
      });
  }

  // Step 6:
  // Create a function that renders the articles that comes back form the server
  /* Article response look like this
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
  //const dataToPost={};
  let btnPost = document.getElementById("post");
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let body = document.getElementById("article-body");
  btnPost.addEventListener("click", (e) => {
    e.preventDefault();
    const dataToPost = {
      article: {
        title: title.value,
        body: body.value,
        description: description.value
      }
    };
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `token ${token}`
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  });

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

  // Step 8: Atach the event listeners to the post form

  // Step 9: Load the articles when document loads :)

  // ENJOY 😈😈👽🤓🤭🤪
  render();
});
