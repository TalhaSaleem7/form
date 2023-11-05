// ItemList.js
import './index.css'
import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

//   const fetchItems = () => {
//     fetch('http://localhost:3000/items')
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => console.error('Error:', error));
//   };


  const fetchItems = () => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json()).then((data) => setItems(data)
      )
    
      
  };

 
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetchItems())
      .catch((error) => console.error('Error:', error));
  };

  const handleUpdate = (id, newName) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    })
      .then(() => fetchItems())
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button
              onClick={() => {
                const newName = prompt('Enter new name:');
                if (newName !== null) {
                  handleUpdate(item._id, newName);
                }
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
