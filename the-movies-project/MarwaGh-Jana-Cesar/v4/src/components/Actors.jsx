import React, { useState, useEffect } from "react";
function Actors({ movieId}) {
  const [movieActors, setMovieActors] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
    )
      .then((response) => response.json())
      .then((json) => {setMovieActors(json.cast.slice(0,5))
       console.log(json.cast.slice(0,4))
      });
  }, [movieId]);
  // const base_img_url = "https://image.tmdb.org/t/p/w500";
  // let poster_path = base_img_url + {movieActor}.profile_path;

  return (
    <div className="Actors">
      
    {movieActors && movieActors.map((actor)=>{
      //console.log(actor.name);
      return (
    <li className="ml-3" key={actor.name} style={{ flex: "0 0 23.33%" }}>
      <img
        alt="img"
        style={{ width: "100px", height: "105px", borderRadius: "50%" }}
        src={
          actor.profile_path
            ? 
            // poster_path
            `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : "https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
        }
      />
      <p className="lead"> {actor.name} </p>
      <p className="font-italic">
        {actor.known_for_department === "Acting" ? "Actor" : null}
      </p>
    </li>)})}
  
    </div>
  );
}

export default Actors;
