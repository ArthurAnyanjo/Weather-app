import React, { useState } from "react";
import axios from 'axios'


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=331bc59e269bdfac6214881ea98bed65`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search-bar">
        <input type="text" value={location} onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyPress={searchLocation}>
        </input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>17°c</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>22°c</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p>57%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>3 MPH</p>
              <p className="bold">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
