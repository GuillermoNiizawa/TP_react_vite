import React, { useEffect, useState } from "react";
import DetallePelicula from "../DetallePelicula/DetallePelicula";

const MoviePopup = ({ movieId, favoritos, setFavoritos, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiKey = 'decb30f2460ef0534f697779e6d52e6d';
    const language = 'es';

    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        console.error('Error fetching movie details in Spanish:', error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <DetallePelicula
      favoritos={favoritos}
      setFavoritos={setFavoritos}
      onClose={onClose}
      movieDetails={movieDetails}
    />
  );
};

export default MoviePopup;
