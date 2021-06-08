import React from "react";
import MoviesGrid from "./MoviesGrid";
const Main = ({ searched, popular, genreId, genring, allPopular }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      <MoviesGrid
        genring={genring}
        searched={searched}
        popular={popular}
        allPopular={allPopular}
        genreId={genreId}
      />
    </div>
  );
};
export default Main;
