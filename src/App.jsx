import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Movie from './Components/Movie';
import AddMovie from './Components/AddMovie';

const App = () => {
  // Initial movies array
  const [movies, setMovies] = useState([
    // Existing movies data
  ]);

  // Function to add a new movie to the movies array
  const handleAddMovie = (newMovie) => {
    // Update the movies array with the new movie
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/AddMovie" element={<AddMovie onAddMovie={handleAddMovie} />} />
      </Routes>
    </Router>
  );
};

export default App;





// Create the following components:
// MovieCard
// MovieList
// // Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.
