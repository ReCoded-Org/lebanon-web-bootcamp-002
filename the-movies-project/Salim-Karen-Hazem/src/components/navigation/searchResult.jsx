import React, { useEffect, useContext } from "react";
import Main from "../main";
import { useLocation } from "react-router-dom";
import { AppContext ,useMovies} from "../../StateProvider";

function SearchResult() {
  const [, dispatch] = useContext(AppContext);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");

  useEffect(() => {
      dispatch({ type: "SET_SEARCH", value: query});
  }, [query]);

  return <Main />;
}

export default SearchResult;