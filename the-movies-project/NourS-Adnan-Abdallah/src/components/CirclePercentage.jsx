// import PercentageCircle from "reactjs-percentage-circle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Circle({ percent }) {
  return (
    <div id="percent">
      <CircularProgressbar
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "20px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: "rgb(30,187,108)",
          textColor: "#fff",
          trailColor: "rgb(32,69,41)",
          backgroundColor: "rgb(0,255,255)"
        })}
        initialAnimation={100}
        ClassName="percent"
        value={percent}
        text={percent + `%`}
      />
    </div>
  );
}
