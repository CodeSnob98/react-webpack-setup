// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MyButton from "./Components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton content={"Click the button!"} />
        <h3>{process.env.NAME}</h3>
      </header>
    </div>
  );
}

export default App;
