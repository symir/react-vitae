import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Info } from "./components";

const App = ({ text, data }) => {
  const { age, name, gender } = data;
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{Info}</p>
      </header>
    </div>
  );
};

export default App;
