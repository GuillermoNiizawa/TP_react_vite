
import React, { useState } from "react";
import "../searchResultsList/SearchResultsList.css";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import MoviePopup from "../moviePopUp/MoviePopup";
import noImage from "../assets/noImage.png";

const SearchResultsList = ({ results, favoritos, setFavoritos }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const isFavorite = (movie) => favoritos.some((fav) => fav.id === movie.id);

  const handleToggleFavorito = (movie) => {
    const updatedFavoritos = isFavorite(movie)
      ? favoritos.filter((fav) => fav.id !== movie.id)
      : [...favoritos, movie];

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
      <section className="seccion-listaResultados">
        <div className="contenedor-lista-listaResultados">
          <ul>

            {results.map((movie) => (
              <li key={movie.id} className="item-lista-listaResultados">
                <div className="poster-img" onClick={() => handleOpenPopup(movie.id)} >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="Poster"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <img
                      src={noImage}
                      alt="No Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>

                <div className="contenedor-resultadosData" onClick={() => handleOpenPopup(movie.id)}>
                  <h2 className="titulo">{movie.title} ({movie.release_date ? new Date(movie.release_date).getFullYear() : ""})</h2>
                  <p className="titulo-original">({movie.original_title})</p>
                  <p className="sinopsis">{movie.overview}</p>

                </div>

                <div className="icono-favoritos" onClick={() => handleToggleFavorito(movie)}>
                  {isFavorite(movie) ? <FaBookmark color="red" /> : <FaRegBookmark color="red" />}
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {selectedMovieId && (
        <MoviePopup
          movieId={selectedMovieId}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default SearchResultsList;
