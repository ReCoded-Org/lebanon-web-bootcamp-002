import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CirclePercentage from "./CirclePercentage";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Actor from "./Actor";
import Actors from "./Actors";
import { StateContext } from "./StateProvider";
import { useHistory } from "react-router-dom";

export default function MoviePage() {
  //https://api.themoviedb.org/3/movie/637649/credits?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US
  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }
  //https://api.themoviedb.org/3/movie/80/videos?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US
  const [state, dispatch] = useContext(StateContext);
  const id = state.movieID;
  const [movieData, setMovieData] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  const [movieCast, setMovieCast] = useState("");
  const [selected, setSelected] = useState("");
  let history = useHistory();

  const base_url = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
  const IMG_URL_BASE = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMovieData(json);
        //console.log(json);
      });

    URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMovieTrailer(json);
        //console.log(json);
      });
    URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US`;
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setMovieCast(json);
        console.log(json);
      });
  }, [id]);

  // One item component
  // selected prop will be passed
  const MenuItem = ({ item, selected }) => {
    return (
      <Actor
        className={`menu-item ${selected ? "active" : ""}`}
        key={item.id}
        name={item.name}
        img={"https://image.tmdb.org/t/p/original" + item.profile_path}
      />
    );
  };

  // All items component
  // Important! add unique key
  const Menu = (list, selected) =>
    list &&
    list.map((el) => {
      return <MenuItem item={el} key={el.id} selected={selected} />;
    });

  const onSelect = (key) => {
    dispatch({ type: "SET_ACTOR_ID", value: key });
    // console.log(history.push);
    history.push(`/${key}`);
    setSelected(key);
    console.log(key);

    //this.setState({ selected: key })
  };

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };
  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  const menuItems = Menu(movieCast.cast, selected);
  return (
    movieData && (
      <div>
        <div
          className="container-movie"
          style={{
            //   backgroundImage: `url(${IMG_URL_BASE + movieData.backdrop_path})`,
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            color: "white"
          }}
        >
          <div id="space"></div>
          <img
            id="movie-img"
            src={IMG_URL_BASE + movieData.poster_path}
            alt=""
          />
          <div className="container-details">
            <h2>
              {movieData.original_title +
                " (" +
                movieData.release_date.split("-")[0] +
                ")"}
            </h2>
            <h6>
              {movieData.genres.map((item, idx) =>
                idx < movieData.genres.length - 1 ? item.name + ", " : item.name
              )}
              {"  "} • {"  "} {timeConvert(movieData.runtime)}
            </h6>
            <br />
            <div className="inner-container">
              <div className="container-rating">
                <CirclePercentage percent={movieData.vote_average * 10} />
                <h5 className="center">Rating</h5>
              </div>
              <h5 className="center">Release date: {movieData.release_date}</h5>
            </div>
            <br />
            <h6>
              <i>“{movieData.tagline}”</i>
            </h6>
            <br />
            <h4>Overview</h4>
            <p>{movieData.overview}</p>
            <div id="youtube">
              {movieTrailer && (
                <iframe
                  width="480"
                  height="252"
                  src={
                    "https://www.youtube.com/embed/" +
                    movieTrailer.results[0].key
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          </div>
          {/* <img
        id="back-img"
        alt=""
        src="https://img.icons8.com/pastel-glyph/64/26e07f/circled-left.png"
        onClick={() => setMoviePage(false)}
      /> */}
        </div>
        <br />
        <h3 style={{ marginLeft: "100px", textAlign: "left" }}>
          <strong>Cast</strong>
        </h3>
        <div className="cast-div">
          {movieCast && (
            <ScrollMenu
              data={menuItems}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onClick={() => {
                console.log("itsme");
                //<Actors />;
              }}
              onSelect={onSelect}
            />
          )}
        </div>
        <br />
      </div>
    )
  );
}
