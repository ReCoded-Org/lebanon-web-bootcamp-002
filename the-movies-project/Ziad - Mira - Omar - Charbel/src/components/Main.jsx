import React from "react";
import FilteredMovies from "./FilteredMovies";
import MoviesGrid from "./MoviesGrid";
const Main = ({ searched, popular, genreId, genring }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      <MoviesGrid
        genring={genring}
        searched={searched}
        popular={popular}
        genreId={genreId}
      />
    </div>
  );
};
export default Main;
