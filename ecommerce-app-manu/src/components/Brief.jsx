import React from 'react';
import './Brief.css'; 

const Brief = ({ order }) => {
  // Asegurarse de que los precios y las cantidades sean números
  const total = order.items.reduce((acc, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity, 10);
    return acc + (price * quantity);
  }, 0);

  return (
    <div className="brief">
      <h2>Resumen del pedido</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.title} x {item.quantity}</li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Brief;