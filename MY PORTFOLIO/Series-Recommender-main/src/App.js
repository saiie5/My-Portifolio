import React, { useState } from "react";
import "./styles.css";
import listOfSeries from "./series";
export default function App() {
  const [genre, setGenre] = useState("Comedy");
  function changeGenreHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="app-component">
        <div className="app-title">
          <h1>PLANNING TO BINGE WATCH A SERIES? CHECKOUT MY FAVOURITES.</h1>
        </div>
        <div className="app-list-genre">
          {Object.keys(listOfSeries).map((genre) => (
            <button
              className="genre-btn"
              onClick={() => changeGenreHandler(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <div className="app-content">
          {listOfSeries[genre].map((series) => (
            <div className="series-card">
              <img src={series.imageUrl} alt={series.name} />
              <span>Name :</span>
              <p className="series-name">{series.name}</p>
              <span>Rating : </span>
              <p className="series-rating">{series.rating}/10</p>
              <span>Number of Seasons : </span>
              <p className="series-seasons">{series.Seasons}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
