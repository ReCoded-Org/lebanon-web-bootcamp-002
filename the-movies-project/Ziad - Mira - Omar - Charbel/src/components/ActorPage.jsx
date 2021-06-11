import React, { useEffect, useState } from "react";
import { Badge, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
function ActorPage() {
  const actorId = useParams();
  const [actor, setActor] = useState([]);
  const base_img_url = "https://image.tmdb.org/t/p/w500";
  let poster_path = base_img_url + actor.profile_path;
  useEffect(() => {
    fetch(`
      https://api.themoviedb.org/3/person/${actorId.id}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&language=en-US`)
      .then((resp) => resp.json())
      .then((data) => {
        setActor(data);
      });
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <img
        style={{ height: "85vh" }}
        as="img"
        className="d-block img-fluid"
        src={poster_path}
      />
      <Card>
        <Card.Body>
          <Card.Title>{actor.name}</Card.Title>
          <Card.Text className="lead">{actor.biography}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date of Birth: {actor.birthday}</ListGroupItem>
          <ListGroupItem>Place of Birth: {actor.place_of_birth} </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default ActorPage;
