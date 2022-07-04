import React, { useState } from "react";
import axios from 'axios'


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=331bc59e269bdfac6214881ea98bed65`

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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °c</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°c</p>: null}
              <p className="bold">Feels like</p>
            </div>
            <div className="humidity">
              {data.main ?<p className="bold">{data.main.humidity}</p> : null }
              <p className="bold">Humidity</p>
            </div>
            <div className="wind">
             {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
              <p className="bold">Wind Speed</p>
            </div>
          </div>
}
        </div>         
      </div>
    </div>
  );
}

export default App;
