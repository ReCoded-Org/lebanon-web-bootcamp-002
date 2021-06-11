import React from "react";

function Actor({ actor }) {
  const base_img_url = "https://image.tmdb.org/t/p/w500";
  let poster_path = base_img_url + actor.profile_path;
  return (
    <li
      className="d-flex justify-content-around align-items-center ml-2"
      style={{ flex: "0 0 13.33%", flexDirection: "column" }}>
      <img
        style={{ width: "100px", height: "105px", borderRadius: "50%" }}
        src={
          actor.profile_path
            ? poster_path
            : "https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
        }
      />
      <p className="lead"> {actor.name} </p>
    </li>
  );
}

export default Actor;
