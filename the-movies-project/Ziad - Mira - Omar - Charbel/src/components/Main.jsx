import React from "react";
import MoviesGrid from "./MoviesGrid";
const Main = ({ searched, genreId, genring }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      <MoviesGrid genring={genring} searched={searched} genreId={genreId} />
    </div>
  );
};
export default Main;
