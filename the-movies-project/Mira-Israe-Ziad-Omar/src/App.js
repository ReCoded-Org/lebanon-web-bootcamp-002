import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
    const [showSpinner, setShowSpinner] = useState(false);
    let handleQuery = (e) => {
        console.log(e);
        // console.log(e.target.value);
    };
    return ( 
        <div className = "App">
        <Navi setShowSpinner = { setShowSpinner }
        handleQuery = { handleQuery } /> 
        <Main showSpinner = { showSpinner } /> 
        <Footer />
        </div>
    );
}