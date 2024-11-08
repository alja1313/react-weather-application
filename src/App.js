import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olga-slahota-485359162"
            target="blank"
            rel="noreferrer"
          >
            Olga Slahota
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/alja1313/react-weather-application"
            target="blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://first-react-weather-application.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
