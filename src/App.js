import React from "react";
import "./App.css";
import ParamBar from "./ParamBar.js";
import ParamBar2 from "./ParamBar2.js";


function App() {
  return (
    <div className="App">
      <div className='header-cont'>
        <img
          className="Logo"
          src="https://www.vtti.vt.edu/img/vtti_logo.png"
          className="color-logo"
        />
          <h1 className='title'>Advanced Driver Asssistance System Estimation Tool</h1>
      </div>
        <div className="App-body">
          <ParamBar />
          <ParamBar2 />
        </div>
    </div>
  );
}

export default App;
