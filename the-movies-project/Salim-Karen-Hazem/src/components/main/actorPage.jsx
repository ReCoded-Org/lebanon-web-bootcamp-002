import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Container, Col, Image } from "react-bootstrap";
import { AppContext } from "../../StateProvider";

function ActorPage() {
  let [actor, setActor] = useState({});
  const { id } = useParams();
  const [state, dispatch] = useContext(AppContext);
  const { movies, genreId, searchInput, watchList, movieId } = state;

  //Fetching Actor Information
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/" +
        id +
        "?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setActor(json));
  }, [id]);

  //console.log(actor)
  return (
    <Container>
      <Button id='btn-link'>
        {" "}
        <Link to={"/movie/" + movieId} id='btn-link'>
          {"<"} back
        </Link>
      </Button>
      <Row id='movieItemStyle' className='m-3 p-2' id='whiteText'>
        <h2>Actor Information</h2>
        <Col lg='4'>
          <Image
            src={"https://image.tmdb.org/t/p/original/" + actor["profile_path"]}
            fluid
            thumbnail
          />
        </Col>
        <Col lg='8'>
          <h3>Actor Name: {actor["name"]}</h3>
          <h4>Born On: {actor["birthday"]}</h4>
          <h4>Place of Birth: {actor["place_of_birth"]}</h4>
          <h4>Popularity: {actor["popularity"]}</h4>
          {actor.biography && (
            <>
              <h5>Biography:</h5> <p>{actor["biography"]}</p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ActorPage;
