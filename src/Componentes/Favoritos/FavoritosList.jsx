import React, { useState } from "react";
import MoviePopup from "../moviePopUp/MoviePopup";
import noImage from "../assets/noImage.jpg"; // Importa la imagen aquí
import './FavoritosList.css';

const FavoritosList = ({ favoritos, setFavoritos }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleRemoveFavorito = (id) => {
    const updatedFavoritos = favoritos.filter((fav) => fav.id !== id);
    setFavoritos(updatedFavoritos);
  };

  const handleOpenPopup = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleClosePopup = () => {
    setSelectedMovieId(null);
  };

  return (
    <>
    <section className="seccion-FavoritosList">
      <div className="contenedor-FavoritosList">
      <div className='titulo-listaFavoritos'>
        <h2 className="h2-titulo-listaFavoritos">Tú lista de favoritos.</h2>
        </div>
        <ul className="lista-favoritos">
          {favoritos.map((movie) => (
            <li key={movie.id} className="item-favorito">
              <div className="poster-null">
                {movie.poster_path ? (
                  <img onClick={() => handleOpenPopup(movie.id)}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img onClick={() => handleOpenPopup(movie.id)}
                    src={noImage}
                    alt="No Image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className="poster-title-overlay" onClick={() => handleOpenPopup(movie.id)}>
                {movie.title}
              </div>
              <button onClick={() => handleRemoveFavorito(movie.id)} className="quitar-btn">X</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedMovieId && (
        <MoviePopup
          movieId={selectedMovieId}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
          onClose={handleClosePopup}
        />
      )}
    </section>
    </>
  );
};

export default FavoritosList;