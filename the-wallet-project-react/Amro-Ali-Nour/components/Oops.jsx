import "../src/styles.css";
import React from "react";
import { Link } from "react-router-dom";
function Oops() {
  return (
    <>
      <div className="m-auto">
        <img
          src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/959/original/ghost.png"
          alt="ghost"
        />
        <h3>Ooops!</h3>
        <p>You have no Wallets. Start by creating One.</p>
        <Link to="/modal">
          <button className="Firstbtn">Create Wallet</button>
        </Link>
      </div>
    </>
  );
}
export default Oops;
