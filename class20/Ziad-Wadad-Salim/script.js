let url="https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e";
let list=document.getElementById("moviesList");
// Task 1
// Create a Movie class, its constructor should take a json object
// and create an image, title, release_date properties
// image path in json is poster_path
// title path in json is original_title
// release_date path in json is realease_date

class Movie{
    constructor(json){
        this.image=json.poster_path;
        this.title=json.original_title;
        this.release_date=json.release_date;
    }

 
// Task 2, create a static function called getMovies
// the static methos should fetch movies from the url
// https://api.themoviedb.org/3/movie/now_playing?api_key=754ad3989128c7d8cfcc82e6591e7f2e
// the function should return a promise that
// resolves an array of Movie class objects

static getMovies(){
return fetch(url)
.then(Response=>Response.json())
.then(data=>data.results.map(movie=>new Movie(movie)))
.catch(error=>console.log(error));
}


// Task 3, create an instance method called renderMovie
// the method should create an html element
// for its properties and display it to the dom
// attach the movie item to #moviesList ul
// to load an image, put this link at the begining of this.image
// https://image.tmdb.org/t/p/w500

 static renderMovie(movie){
   let li= document.createElement("li");
li.innerHTML+=`
<img src=${"https://image.tmdb.org/t/p/w500" + movie.image} />
<p>${movie.title}</p>
<p>${movie.release_date}</p>
`
list.appendChild(li);
}



// Task 4, create a static function called render, it takes an array of
// Movie instances, and loops over them
// calling the element's renderMovie method

static render(movies){
  for (const movie of movies){
     Movie.renderMovie(movie)
  }  
}

}
// Task 5, call the static function getMovies and
// then call the static function render on the arrays that you get back
Movie.getMovies().then(movies=>Movie.render(movies));

