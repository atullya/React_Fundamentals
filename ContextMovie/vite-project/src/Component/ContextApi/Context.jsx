import { createContext, useContext, useEffect, useState } from "react";

// Create the MovieContext
export const MovieContext = createContext();

const getMovie = (movcat, setMovies) => {
  const url = `https://api.themoviedb.org/3/trending/${movcat}/day?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDEzNTE3ZWExYjVjNGNhYzFlYTFkM2QxZmVjMTdlOCIsIm5iZiI6MTcyOTA0OTkyNi4yNzE4ODIsInN1YiI6IjY1NzVhYTM1ZWMzNzBjMDExZGE5ODc2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CeqA-gQauf3wFKQ34Uu60xCzBr-mNvdZ-rS0OMM5bCI",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json); // Update the movies state with the fetched data
    })
    .catch((err) => console.error("error: " + err));
};

export const useMovieData = () => {
  return useContext(MovieContext);
};

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [movcat, setMovcat] = useState("movie"); // State for selecting the category (movie/tv)

  useEffect(() => {
    getMovie(movcat, setMovies); // Pass movcat to the getMovie function
  }, [movcat]); // Add movcat as a dependency to re-fetch data when it changes

  return (
    <MovieContext.Provider value={{ movies, setMovcat }}>
      {children}
    </MovieContext.Provider>
  );
};
