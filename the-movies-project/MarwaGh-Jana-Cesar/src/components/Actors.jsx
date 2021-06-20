import React, { useState, useEffect } from "react";
//import ActorPage from "./actorPage";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Actors({ movieId }) {
  const [movieActors, setMovieActors] = useState([]);
  const [actors, setActors] = useState({});
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovieActors(json.cast.slice(0, 5));
        console.log(json.cast.slice(0, 5));
      });
  }, [actors]);
  // const base_img_url = "https://image.tmdb.org/t/p/w500";
  // let poster_path = base_img_url + {movieActor}.profile_path;
  //   const handleClick = () => {
  //  history.push("person/" + {actor_id})};

  return (
    <div className="Actors">
      {movieActors &&
        movieActors.map((actor, i) => {
          //  console.log(actor.id);
          return (
            <ul>
              <Link
                to={`/ActorPage/${actor.id}`}
                style={{ textDecoration: "none" }}
              >
                <li className="ml-3" key={i} style={{ flex: "0 1 23.33%" }}>
                  <Card className="card" style={{ width: "20rem" }}>
                    <Card.Img
                      variant="top"
                      src={
                        actor.profile_path
                          ? // poster_path
                            `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                          : "https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
                      }
                      style={{ height: "500px" }}
                    />
                    <Card.Body>
                      <Card.Title>{actor.name}</Card.Title>
                      <Card.Text>
                        {/* <ReadMoreReact
                       text={movie.overview}
                       min={60}
                       ideal={65}
                       max={70}
                     /> */}
                      </Card.Text>

                      {/* <Button
                     variant="outline-success"
                     
                   >
                     Actor
                   </Button> */}
                    </Card.Body>
                  </Card>
                </li>
              </Link>
            </ul>
          );
        })}
    </div>
  );
}

// <img
// alt="img"
// style={{
//   width: "100px",
//   height: "105px",
//   borderRadius: "50%"
// }}
// src={
//   actor.profile_path
//     ? // poster_path
//       `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
//     : "https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
// }
// />
// <p className="lead"> {actor.name} </p>
// <p className="font-italic">
// {actor.known_for_department === "Acting" ? "Actor" : null}
// </p>
