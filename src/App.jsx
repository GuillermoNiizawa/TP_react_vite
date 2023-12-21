
import React, { useState, useEffect } from "react";
import SearchBar from './Componentes/SearchBar/SearchBar';
import SearchResultsList from './Componentes/searchResultsList/SearchResultsList';
import Popular from "./Componentes/Tendencias/Tendencias";


function App() {
  const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const [results, setResults] = useState([]);
  const [favoritos, setFavoritos] = useState(storedFavoritos);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} setFavoritos={setFavoritos} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} favoritos={favoritos} setFavoritos={setFavoritos} />
        )}
      </div>
      <Popular />

    </>
  );
}

export default App;

