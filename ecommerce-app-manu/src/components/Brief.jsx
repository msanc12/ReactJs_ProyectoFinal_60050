import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; 
import './Brief.css'; 

const Brief = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderDoc = await getDoc(doc(db, 'orders', orderId));
        if (orderDoc.exists()) {
          setOrder(orderDoc.data());
        } else {
          console.error('No existe documento!');
        }
      } catch (error) {
        console.error('Error al obtener el documento:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!order) {
    return <p>No se encontró la orden.</p>;
  }

  const total = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="brief">
      <h2>Resumen del pedido</h2>
      <p className="order-id">ID de la orden: <strong>{orderId}</strong></p> {/* Mostrar el ID de la orden */}
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