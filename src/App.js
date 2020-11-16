import React from "react";
import "./App.css";
import ParamBar from "./ParamBar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="Logo"
          src="https://www.vtti.vt.edu/img/vtti_logo.png"
          className="color-logo"
        />
      </header>
        <div className="section page-title">
              <h1>Estimate Of Lives Saved</h1>
              </div>
        <div className="sidebar-cont">
          <ParamBar />
        </div>
    </div>
  );
}

export default App;
