// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading'; // Importar el componente Loading

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true); // Iniciar carga
      const response = await fetch(`https://fakestoreapi.com/products${categoryId ? `/category/${categoryId}` : ''}`);
      const data = await response.json();
      setItems(data);
      setLoading(false); // Finalizar carga
    };

    fetchItems();
  }, [categoryId]);

  if (loading) {
    return <Loading />; // Mostrar componente de carga
  }

  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;