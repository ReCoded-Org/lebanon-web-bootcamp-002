import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { StateContext } from "../StateProvider";
const Genre = () => {
  const [state] = useContext(StateContext);

  return (
    <>
      {state.genre[0] &&
        state.genre[0].map((gen) => {
          return (
            <NavDropdown.Item value={gen.id} eventKey={gen.id}>
              {gen.name}
            </NavDropdown.Item>
          );
        })}
    </>
  );
};

export default Genre;
