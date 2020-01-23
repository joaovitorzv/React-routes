import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`http://localhost:3333/cars`);
    const item = await data.json();
    console.log(item);
    setItems(item);
  }

  return (
    <div className="App">
        <div className="shop-container">
          {items.map(item => (
            <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.label}</Link>
            </h1>
          ))}
        </div>
    </div>
  );
}

export default Shop;
