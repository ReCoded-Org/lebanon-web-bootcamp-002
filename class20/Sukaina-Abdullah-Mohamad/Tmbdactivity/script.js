// Task 1
// Create a Movie class, its constructor should take a json object
// and create an image, title, release_date properties
// image path in json is poster_path
// title path in json is original_title
// release_date path in json is realease_date

// Task 2, create a static function called getMovies
// the static methos should fetch movies from the url
// https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e
// the function should return a promise that
// resolves an array of Movie class objects


// Task 3, create an instance method called renderMovie
// the method should create an html element
// for its properties and display it to the dom
// attach the movie item to #moviesList ul
// to load an image, put this link at the begining of this.image
// https://image.tmdb.org/t/p/w500

// Task 4, create a static function called render, it takes an array of
// Movie instances, and loops over them
// calling the element's renderMovie method

// Task 5, call the static function getMovies and
// then call the static function render on the arrays that you get back
class Movie {
  constructor(json) {
    this.image = json.poster_path;
    this.title = json.original_title;
    this.release_date = json.release_date;
  }

  static getMovies() {
   let url ="https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e";
    return fetch(url)
      .then(response => response.json())
      .then(data => data.results.map(movie => new Movie(movie)))
      .catch(error => console.log(error));
  }
  
  static renderMovie(movie) {
    const moviesList = document.getElementById("moviesList");
    moviesList.insertAdjacentHTML(
      "beforeend",
      `
      <li>
      <img src=${"https://image.tmdb.org/t/p/w500" +
        movie.image} alt="poster" class="poster"/>
      <h3>${movie.title}</h3>
      <span>${movie.release_date}</span>
      <hr>
      </li>
    `
    );
  }

  static render(movies) {
    movies.forEach(movie => {
      Movie.renderMovie(movie);
    });
  }
}

Movie.getMovies().then(movies => {
  Movie.render(movies);
});