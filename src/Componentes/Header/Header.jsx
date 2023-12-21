
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import App from "../../App";
import DetallePelicula from "../DetallePelicula/DetallePelicula";
import '../Header/Header.css';
import Fav from '../Fav/Fav';
import logo from '../assets/logo.png'

const Header = () => {
   
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul className='nav-lista'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/' className='nav-link'> <img  className='nav-link-logo'  src={logo}  alt="" /></NavLink>
                <NavLink to='Fav' className='nav-link'>Favoritos</NavLink>      
            </ul>
          </nav>
        </header>

        <Routes>
          <Route index element={<App />} />
          <Route path='DetallePelicula/:id' element={<DetallePelicula />} />
          <Route path='Fav' element={<Fav />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;


