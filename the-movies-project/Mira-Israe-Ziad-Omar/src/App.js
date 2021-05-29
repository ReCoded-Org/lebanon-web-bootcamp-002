import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <Navi />
      <Main />
      <Footer />
    </div>
  );
}
