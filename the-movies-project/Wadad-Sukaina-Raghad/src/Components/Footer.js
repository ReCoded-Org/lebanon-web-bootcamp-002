import Card from "react-bootstrap/Card";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <div className="Footer">
      
        <Card  sticky="buttom" bg="dark" text="info" bsPrefix="card-footer">
          <Card.Header>© 2021 Recoded Team</Card.Header>
          <Card.Body >
            <Card.Title> Credits to: Wadad, Raghad, Sukaina</Card.Title>
            <Card.Text>Find our GitHub accounts below:</Card.Text>
            <a href="https://github.com/wadadzein" target="_blank" rel="noreferrer">Wadad</a> <a href="https://github.com/raghadsam" target="_blank" rel="noreferrer">Raghad</a> <a href="https://github.com/sukaina-charaf-eddine" target="_blank" rel="noreferrer">Sukaina</a>
          </Card.Body>
        </Card>
      
    </div>
  );
}
