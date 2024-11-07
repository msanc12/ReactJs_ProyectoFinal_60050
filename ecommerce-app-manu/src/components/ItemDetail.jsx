import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import './ItemDetail.css'; 

const ItemDetail = ({ item }) => (
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <img src={item.image} className="img-fluid img-detail" alt={item.title} />
      </div>
      <div className="col-md-6">
        <h3>{item.title}</h3>
        <p className="text-muted">${item.price}</p>
        <p>{item.description}</p>
        <AddItemButton item={item} />
      </div>
    </div>
  </div>
);

export default ItemDetail;