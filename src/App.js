import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olga-slahota-485359162"
            target="_blank"
          >
            Olga Slahota
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/alja1313/react-weather-application"
            target="_blank"
          >
            GitHub 🌡
          </a>
        </footer>
      </div>
    </div>
  );
}
