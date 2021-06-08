import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
