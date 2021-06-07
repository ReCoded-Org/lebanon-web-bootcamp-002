import MovieGrid from "./MovieGrid.js";
import "../App.css";
export default function Popular(props) {
  return <>{props.renderPopular("discover/movie")}</>;
}
