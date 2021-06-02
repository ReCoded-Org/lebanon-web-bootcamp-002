import { FormControl, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Spn from "./Spinner.jsx";
export default function Search(props) {
  const [Value, setValue] = useState("");
  const [showHide, setShowHide] = useState(false);
  function onSearch(e) {
    e.preventDefault();
    console.log(e.target.value);
    setValue(e.target.value);
    setShowHide(true);
    if (e.target.value === "") {
      setShowHide(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(Value);
    setShowHide(false);
    e.target.reset();
  }
  return (
    <div className="searchbox">
      <span>{showHide && <Spn />}</span>
      <Form onSubmit={handleSubmit} inline>
        <FormControl
          onChange={onSearch}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
    </div>
  );
}
