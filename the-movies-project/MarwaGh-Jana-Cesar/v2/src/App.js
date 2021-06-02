//import React from 'React';
import "./styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import MainContent from "./components/main";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
