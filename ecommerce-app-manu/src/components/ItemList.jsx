 
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css'; 

const ItemList = ({ items }) => (
  <div className="container mt-4">
    <div className="row">
      {items.map(item => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
          <div className="card h-100 shadow-sm">
            <div className="img-container">
              <img src={item.image} className="card-img-top img-fixed" alt={item.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">${item.price}</p>
              <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ItemList;