import React from 'react';
import './App.css';
import ParamBar from './ParamBar.js'
import Graph from './Graph.js'
import Plot from 'react-plotly.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Estimate Of Lives Saved
        </p>
        
      </header>
      <body className="App-body">
        <div class='sidebar-cont'>
          <ParamBar/>
          <button class= 'estimate_btn' type="button">Get Estimate</button>
        </div>
        <div class='plots-cont'>
          <Graph/>
        </div>

        </body>
    </div>
  );
}

export default App;
