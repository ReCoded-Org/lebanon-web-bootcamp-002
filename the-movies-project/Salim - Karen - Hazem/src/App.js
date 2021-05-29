import React from "react";
import Main from "./components/main";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
