// Task 1
// Create a Movie class, its constructor should take a json object
// and create an image, title, release_date properties
// image path in json is poster_path
// title path in json is original_title
// release_date path in json is realease_date

class Movie {

  constructor(json){
     this.title = json.title;
     this.date = json.release_date;
     this.imgSrc = json.poster_path;

  }

// Task 2, create a static function called getMovies
// the static methos should fetch movies from the url
// https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e
// the function should return a promise that
// resolves an array of Movie class objects

static getMovies(){
  return fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e")
  .then(res => {
    return res.json()
      })
  .then(json => {return json.results.map(el=> new Movie(el))
      })
    }

// Task 3, create an instance method called renderMovie
// the method should create an html element
// for its properties and display it to the dom
// attach the movie item to #moviesList ul
// to load an image, put this link at the begining of this.image
// https://image.tmdb.org/t/p/w500

renderMovie(){
  let ul = document.getElementById("moviesList")
  let li = document.createElement("li")
  li.innerHTML = `<h3>${this.title}</h3> <p>${this.date}</p> <img src = 'https://image.tmdb.org/t/p/w500${this.imgSrc}'\> <hr>`
  ul.appendChild(li)
  }

// Task 4, create a static function called render, it takes an array of
// Movie instances, and loops over them
// calling the element's renderMovie method
static render(movies){
  // console.log(movies);
  for (let j = 0; j<movies.length; j++){
      // console.log(movies[j]);
      movies[j].renderMovie()
    }
  }
}
// Task 5, call the static function getMovies and
// then call the static function render on the arrays that you get back
Movie.getMovies().then(data => {
  console.log(data)
  Movie.render(data)})
