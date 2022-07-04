import React, { useState } from "react";
import axios from 'axios'

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&appid=331bc59e269bdfac6214881ea98bed65`


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="bottom">
            <div className="location">
              <p>London</p>
            </div>
            <div className="temp">
              <h1>17°c</h1>
            </div>
            <div className="description">

            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
