import { Card } from "react-bootstrap";

export default function Actor({ name, img }) {
  return (
    <Card style={{ borderRadius: "12px", width: "11rem", height: "300px" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "200px", marginBottom: "15px" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
