import { Card, Button } from "react-bootstrap";
import ReadMoreReact from "read-more-react";
export default function MovieItem({ movieTitle, movieImg, movieDescription }) {
  return (
    <Card className="card" style={{ width: "22rem" }}>
      <Card.Img variant="top" src={movieImg} style={{ height: "500px" }} />
      <Card.Body>
        <Card.Title>{movieTitle}</Card.Title>
        <Card.Text>
          <ReadMoreReact text={movieDescription} min={60} ideal={65} max={70} />
        </Card.Text>
        <Button variant="outline-success">See movie</Button>
      </Card.Body>
    </Card>
  );
}
