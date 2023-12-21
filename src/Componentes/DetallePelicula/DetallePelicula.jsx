
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../DetallePelicula/DetallePelicula.css";
import noImage from "../assets/noImage.png";

// Componente DetallePelicula
const DetallePelicula = ({ onClose, movieDetails }) => {

  if (!movieDetails) {
    return <p>Loading...</p>;
  }


  return (
    <>

      <section className="seccion-detallePelicula" onClick={onClose}>
        <div
          className="contenedor-detallePelicula"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})`,
          }}
        >
          <div className="detalle-info-contenedor">
            <div>
              {movieDetails.poster_path ? (
                <img
                  className="detalle-info-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  alt="poster"
                />
              ) : (
                <img
                  className="detalle-info-poster"
                  src={noImage}
                  alt="No Image"
                  style={{ width: '80%', objectFit: 'cover' }}
                />
              )}
            </div>

            <div className="detalle-info">
              <h2 className="detalle-titulo">{movieDetails.title.toUpperCase()} </h2>
              <p className="detalle-info-p"> ({movieDetails.original_title})</p>
              <div className="detalle-info-generos">
                <hr />
                <p>
                  {movieDetails.release_date ? movieDetails.release_date.split('-')[0] : ""} ·{' '}
                  {movieDetails.genres.map((genre) => genre.name).join('/')} · {movieDetails.runtime} min
                </p>
                <hr />
              </div>
              <p className="detalle-info-sinopsis">{movieDetails.overview} </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetallePelicula;
