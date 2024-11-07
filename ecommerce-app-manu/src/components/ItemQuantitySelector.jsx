// src/components/ItemQuantitySelector.js
import React, { useState } from 'react';

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity-selector">
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;