import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Singapore" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olga-slahota-485359162"
            target="_blank"
            rel="noreferrer"
          >
            Olga Slahota
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/alja1313/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            GitHub 🌡
          </a>
        </footer>
      </div>
    </div>
  );
}
