 
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importar el archivo CSS

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Manu Store</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/categories/electronics">Electrónica</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories/jewelery">Joyería</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories/men's clothing">Ropa Hombre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories/women's clothing">Ropa Mujer</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </div>
  </nav>
);

export default NavBar;