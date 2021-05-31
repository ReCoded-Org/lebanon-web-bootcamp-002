import React, { useState } from "react";
import {Form,Button, FormControl,Spinner } from "react-bootstrap";

export default function Search() {
  const [showHide, setShowHide] = useState(false);
  const handleShow = (e) => {
  setShowHide(true)
  if(e.target.value===""){
    setShowHide(false)
}
   
  };

  return (
    <div>
      <Form id="form" inline>
    <FormControl
      type="text"
      placeholder="Search"
      onChange={handleShow}
      className="mr-sm-2"
    />
    
     <Button variant="outline-success">Search</Button>
     {showHide && <Spinner animation="grow" id="spin" />}
          </Form>  
    </div>
  );
}
