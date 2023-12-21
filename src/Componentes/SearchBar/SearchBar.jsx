<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,700" rel="stylesheet"></link>;

import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';


 const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
        const apiKey = 'decb30f2460ef0534f697779e6d52e6d';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&language=es`)
            .then(response => response.json())
            .then(json => {
                const movies = json.results || [];
                setResults(movies);
            })
            .catch(error => {
                console.error('Error al obtener datos en español:', error);
            });
    };

    const handleChange = (value) => {
        setInput(value);


        if (value === '') {
            setResults([]);
        } else {
            fetchData(value);
        }
    };

    return (
        <>
            <section className="seccion-barra-fondo">
                <div>
                    <h1 >Bienvenido.</h1>
                    <h2 className="bienvenida">Millones de películas a tu disposición. Encuentra la que busques.</h2>
                </div>
                <div className="contenedor-barra">
                    <div className="contenedor-input">
                        <FaSearch id='icono-busqueda' />
                        <input
                            placeholder="buscar..."
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SearchBar