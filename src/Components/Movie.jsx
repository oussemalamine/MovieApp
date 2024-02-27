import React from 'react';
import { useParams } from 'react-router-dom';
import movies from './movies'; // Array of movie objects

const Movie = () => {
  const { id } = useParams();
  const movieToShow = movies.find(movie => movie.id === parseInt(id));

  if (!movieToShow) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="container">
      <h1>{movieToShow.title}</h1>
      <img src={movieToShow.poster} alt={movieToShow.title} style={{height: '50vh', width:'30vw'}} />
      <p>Rating: {movieToShow.rating}</p>
      <a href={movieToShow.trailer}>Watch Trailer</a>
      <p>Category: {movieToShow.category.join(', ')}</p>
    </div>
  );
};

export default Movie;
