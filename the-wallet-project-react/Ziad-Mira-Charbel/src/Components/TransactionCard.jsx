import React from "react";
import { Card, Badge } from "react-bootstrap";
const TransactionCard = ({ tran }) => {
  return (
    <Card
      className="me-2 my-1 text-white shadow-sm"
      style={
        tran.type === "income"
          ? { backgroundColor: "green", minWidth: "15rem" }
          : { backgroundColor: "red", minWidth: "15rem" }
      }>
      <Card.Body>
        <Card.Title className="text-center display-6">{tran.amount}</Card.Title>
        <Card.Text className="text-center lead">{tran.notes}</Card.Text>
        {tran.tags &&
          tran.tags.split(",").map((tag) => (
            <Badge
              className="me-1"
              style={{
                backgroundColor: "black",
                borderRadius: "10px",
                border: "none",
              }}>
              {tag}
            </Badge>
          ))}
      </Card.Body>
    </Card>
  );
};

export default TransactionCard;
