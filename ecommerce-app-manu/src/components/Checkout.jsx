import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; 
import Brief from './Brief'; 
import './Checkout.css'; 

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [orderId, setOrderId] = useState(null); // Estado para almacenar el ID de la orden

  const handleCheckout = async () => {
    if (email !== confirmEmail) {
      alert('Emails no coinciden');
      return;
    }

    const newOrder = {
      items: cartItems,
      name,
      surname,
      phone,
      email,
      date: new Date(),
      status: 'generated'
    };

    try {
      const orderRef = await addDoc(collection(db, 'orders'), newOrder);
      alert(`Orden generada! ID de Orden es ${orderRef.id}`);
      setOrderId(orderRef.id); // Almacenar el ID de la orden en el estado
      clearCart();
    } catch (e) {
      console.error("Error agregar el documento: ", e);
    }
  };

  return (
    <div className="container mt-4">
      {orderId ? (
        <Brief orderId={orderId} /> 
      ) : (
        <>
          <h2>Generar Orden - Comprar</h2>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Confirmar Email</label>
              <input type="email" className="form-control" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} />
            </div>
            <button type="button" onClick={handleCheckout} className="btn btn-primary">Generar Orden - Comprar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;