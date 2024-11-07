 
import React from 'react';
import './Loading.css'; // Importar el archivo CSS

const Loading = () => (
  <div className="loading-container">
    <img src="/public/loading.gif" alt="Cargando..." className="loading-gif" />
    <p className="loading-text">Cargando...</p>
  </div>
);

export default Loading;