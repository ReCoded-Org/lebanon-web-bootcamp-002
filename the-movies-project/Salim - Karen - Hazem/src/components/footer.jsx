import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div>
      <p>made by:</p>
      <Button variant="link" href="https://github.com/karenchehade">
        Karen Chehade
      </Button>
      <Button variant="link" href="https://github.com/SalimMersally">
        Salim Al Mersally
      </Button>
      <Button variant="link" href="https://github.com/hsank96">
        Hazem Sankari
      </Button>
    </div>
  );
}

export default Footer;
