import React, { useState, useEffect } from "react";
import FavoritosList from '../Favoritos/FavoritosList';

function Fav() {

  const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const [results, setResults] = useState([]);
  const [favoritos, setFavoritos] = useState(storedFavoritos);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <>
        <div className="pol">
          <FavoritosList favoritos={favoritos} setFavoritos={setFavoritos} />
        </div>
    </>
  );
}

export default Fav;


