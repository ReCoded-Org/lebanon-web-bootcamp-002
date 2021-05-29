import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import React from "react";
import Navig from "./components/Navig";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Navig />
      <Main />
      <Footer />
    </div>
  );
}
