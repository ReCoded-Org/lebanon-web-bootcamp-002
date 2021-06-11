import React, { useContext, useEffect, useState } from "react";
import { Badge, Carousel } from "react-bootstrap";
import { StateContext } from "../StateProvider";

function Trending() {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=78d25a5f3730fb9c31adbb75ca051bf6&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((data) => setUpcoming(data));
  }, []);
  const [state] = useContext(StateContext);
  const base_img_url = "https://image.tmdb.org/t/p/w500";
  let trendingMovies = state.trending[0];
  return (
    <div className="d-flex">
      <Carousel
        controls={false}
        style={{
          backgroundColor: "black",
          height: "85vh",
          width: "65vw",
        }}>
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <Carousel.Item>
              <div className="d-flex">
                <img
                  style={{
                    height: "85vh",
                  }}
                  className="d-block img-fluid"
                  src={`${base_img_url + movie.poster_path}`}
                  alt="slide"
                />
                <div>
                  <p className="ml-2 mt-2 pr-2 lead text-white">
                    {movie.overview}
                  </p>
                  <Badge variant="warning" className="ml-2">
                    {" "}
                    Rating: {movie.vote_average}{" "}
                  </Badge>
                  <Badge className="ml-2" variant="info">
                    {movie.release_date}
                  </Badge>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
      <div
        className="shadow-lg"
        style={{ width: "35vw", backgroundColor: "#121E2E" }}>
        <h3
          className="display-3 ml-2"
          style={{
            fontSize: "35px",
            color: "white",
          }}>
          Upcoming:
        </h3>
        <ul style={{ listStyle: "none", color: "white" }}>
          {upcoming.results &&
            upcoming.results.slice(0, 8).map((movie) => (
              <>
                <hr
                  style={{
                    color: "white",
                    backgroundColor: "white",
                    height: "1px",
                  }}
                />
                <li className="d-flex" style={{ listStyle: "none" }}>
                  <span className="mr-2">{movie.original_title}</span>
                  <Badge variant="danger">{movie.release_date}</Badge>
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Trending;
