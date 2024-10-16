import React, { useState } from "react";
import { useMovieData } from "./ContextApi/Context";
import "./ShowMovie.css";
export default function ShowMovie() {
  const { movies, setMovcat } = useMovieData(); // Directly use `movies` as it is the value provided by the context
  console.log(movies);

  if (!movies) {
    return <div>Loading...</div>; // Display a loading message while movies are being fetched
  }
  const [activeTab, setActiveTab] = useState(0);
  const handleEvent = (value, newCategory) => {
    setActiveTab(value);
    setMovcat(newCategory);
  };
  return (
    <div className="cat">
      <div className="sub-cat">
        <div
          className="popular"
          onClick={() => {
            handleEvent(0, "movie");
          }}
        >
          Movie
        </div>
        <div
          className="trending"
          onClick={() => {
            handleEvent(1, "tv");
          }}
        >
          TV Shows
        </div>
      </div>

      <div className={`active-content ${activeTab == 0 ? "show" : "hide"}`}>
        <h1>Movie Changes</h1>
        {movies.results && movies.results.length > 0 ? (
          movies.results.slice(0, 5).map((movie, index) => (
            <div key={index}>
              <h3>{movie.title || `Movie ID: ${movie.id}`}</h3>
              <h2>{movie.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              {/* Render other details of the movie as needed */}
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
      <div className={`active-content ${activeTab == 1 ? "show" : "hide"}`}>
        <h1>Movie Changes</h1>
        {movies.results && movies.results.length > 0 ? (
          movies.results.slice(0, 5).map((movie, index) => (
            <div key={index}>
              <h3>{movie.title || `Movie ID: ${movie.id}`}</h3>
              <h2>{movie.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              {/* Render other details of the movie as needed */}
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    </div>
  );
}
