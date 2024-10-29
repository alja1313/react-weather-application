import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Odesa" />
        <footer>
          This project was coded by Olga Slahota and is open-sourced on{" "}
          <a
            href="https://github.com/Kat2Rina/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://magenta-yeot-308d19.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
