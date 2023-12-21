import React, { useState, useEffect } from 'react';
import '../Tendencias/Tendencias.css';
import MoviePopup from "../moviePopUp/MoviePopup";


function Tendencias() {
  const [titulos, setTitulos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=decb30f2460ef0534f697779e6d52e6d&language=es')
      .then(response => response.json())
      .then(data => {
        setTitulos(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth <= 1024) {
        setMoviesPerPage(20);
      } else {
        setMoviesPerPage(5);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(titulos.length / moviesPerPage);
  const visibleMovies = titulos.slice(currentIndex, currentIndex + moviesPerPage);

  const handleOpenPopup = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleClosePopup = () => {
    setSelectedMovieId(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + moviesPerPage) % titulos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - moviesPerPage + titulos.length) % titulos.length);
  };

  return (
    <>
      <section className='seccion-tendencias'>
       <div className='titulo-tendencias'>
          <h2 className="h2-titulo-tendencias">Tendencias</h2>
        </div>

        <ul className='lista-tendencias'>
          {visibleMovies.map((titulo) => (
            <li key={titulo.id} className='item-lista-tendencias' onClick={() => handleOpenPopup(titulo.id)}>
              <div className="movie-container" onMouseEnter={() => console.log('Mouse Enter')} onMouseLeave={() => console.log('Mouse Leave')}>
                <img className='lista-tendencia-img'  src={`https://image.tmdb.org/t/p/w500${titulo.poster_path}`} alt={titulo.title} />
                <div className="movie-name">{titulo.title}</div>
              </div>
            </li>
          ))}
        </ul>
        

        {totalPages > 1 && (
          <div className="carousel-buttons">
            <button onClick={prevSlide} className='btn-prev'>
              &#9665; 
            </button>
            <button onClick={nextSlide} className='btn-next'>
              &#9655; 
            </button>
          </div>
        )}

        {selectedMovieId && (
          <MoviePopup
            movieId={selectedMovieId}
            onClose={handleClosePopup}
          />
        )}
      </section>
    </>
  );
}

export default Tendencias;