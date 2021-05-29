import React from "react";
import { Spinner } from "react-bootstrap";

function Spin(prop) {
  return (
    <Spinner
      className="m-2"
      animation="grow"
      variant="dark"
      style={{ display: prop.display }}
    />
  );
}

export default Spin;
