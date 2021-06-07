import "bootstrap/dist/css/bootstrap.min.css";
import "/src/styles.css";
import React from "react";
import Link from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span>Made with ♥ by:</span>
        <div className="flex">
          <div>
            <a href="https://github.com/AbdallahSafar" target="_blank">
              <img src="https://img.icons8.com/material-sharp/24/000000/github.png" />
            </a>
            <span>‎‎‎‎‎‎‏‏‎‎‏ Abdallah </span>
          </div>

          <div>
            <a href="https://github.com/Adnan-961" target="_blank">
              <img src="https://img.icons8.com/material-sharp/24/000000/github.png" />
            </a>
            <span> ‏‏‎Adnan</span>
          </div>
          <div>
            <a href="https://github.com/" target="_blank">
              <img src="https://img.icons8.com/material-sharp/24/000000/github.png" />
            </a>
            <span> Nour</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
