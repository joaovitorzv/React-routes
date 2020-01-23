import React, { useState, useEffect } from 'react';
import './App.css';


function Item({ match }) {
  
  useEffect(() => {
    fetchItem();
  }, [])

  const [item, setItem] = useState({});
  
  const fetchItem = async () => {
    const data = await fetch(`http://localhost:3333/${match.params.id}`);
    const item = await data.json();
    setItem(item);
  }

  return (
    <div className="item-container">
      <h1>{item.label}</h1>
      <img src={item.image} alt="Car"/>
      <p>{item.description}</p>
    </div>
  );
}

export default Item;
