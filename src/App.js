import React from "react";
import "./App.css";
import ParamBar from "./ParamBar.js";
import { useHistory} from "react-router-dom";

const App = () =>{
  
  function AboutButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("capstone/about");
    }
  
    return (
      <button className='Abt' type="button" onClick={handleClick}>
        About
      </button>
    );
  }
  return (
    <div className="App">
      <div className='header-cont'>
        <div className='grp1'>
        <img
          src="https://www.vtti.vt.edu/img/vtti_logo.png"
          className="color-logo"
          alt=""
        />
          <h1 className='title'>Advanced Driver Asssistance System Estimation Tool</h1>
          </div>
          <AboutButton/>
      </div>
        <ParamBar/>
      </div>
  );
}

export default App;
