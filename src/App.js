import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function WeatherApp() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brisbane" />
        <footer>
          This project is{" "}
          <a
            href="https://github.com/AnaMamede-dev/my-react-final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub.
          </a>{" "}
          For learning purposes only.
        </footer>
      </div>
    </div>
  );
}
