import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
    addItem(item, quantity); // Pasar la cantidad correcta al agregar el artículo
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        min="1"
        className="form-control mb-2"
      />
      <button onClick={handleAddItem} className="btn btn-primary">Agregar al carrito</button>
    </div>
  );
};

export default AddItemButton;