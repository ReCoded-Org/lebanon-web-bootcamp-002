import React from "react";
import { useEffect, useState, useContext } from "react";
import { StateContext } from "./StateProvider";
import CirclePercentage from "./CirclePercentage";
function Actors({ actor }) {
  const [actorData, setActorData] = useState("");
  const [state, dispatch] = useContext(StateContext);
  const actorID = state.actorID;
  let base = "https://image.tmdb.org/t/p/original";

  // https://api.themoviedb.org/3/person/135651?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US

  useEffect(() => {
    let Actor_url = `https://api.themoviedb.org/3/person/${actorID}?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US`;
    fetch(Actor_url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setActorData(json);
      });
  }, [actorID]);
  // lposter_path = base + actorData.profile_path;
  return (
    actorData && (
      <div>
        {/* <h1>HI</h1>
        <img src={base + actorData.profile_path} alt="" />
        <img src= {"https://image.tmdb.org/t/p/original" + {actorData.person.profile_path}} /> */}

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
          <img id="actor-img" src={base + actorData.profile_path} alt="" />
          <div className="container-details">
            <h2>
              {actorData.name} (
              <span className="aka">
                Also Known as: "{actorData.also_known_as[0]}"
              </span>
              )
            </h2>
            <br />
            <h5>
              <strong>• Date of birth:</strong> {actorData.birthday}
            </h5>
            <h5>
              <strong> • Place of birth:</strong> {actorData.place_of_birth}{" "}
              {"  "}{" "}
            </h5>
            <h5>
              <strong>• Gender:</strong>{" "}
              {actorData.gender == 1 ? "Female" : "Male"}
            </h5>
            <br />
            <div className="inner-container">
              <div className="container-rating">
                <CirclePercentage percent={Math.floor(actorData.popularity)} />
                {/* <h1>test1</h1> */}
                <h5 className="center">{"     "} Popularity</h5>
              </div>
            </div>
            <br />
            <h4>Biograghy</h4>
            <p>{actorData.biography}</p>
            {/* <div id="youtube">
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
            </div> */}
          </div>
          {/* <img
        id="back-img"
        alt=""
        src="https://img.icons8.com/pastel-glyph/64/26e07f/circled-left.png"
        onClick={() => setMoviePage(false)}
      /> */}
        </div>

        <br />
      </div>
    )
  );
}
export default Actors;
