import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsData = [
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', price: 12.99, image: 'https://picsum.photos/seed/echeveria/300/300' },
      { name: 'Jade Plant', price: 9.99, image: 'https://picsum.photos/seed/jade/300/300' },
      { name: 'Aloe Vera', price: 14.99, image: 'https://picsum.photos/seed/aloe/300/300' },
    ],
  },
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 18.99, image: 'https://picsum.photos/seed/snake/300/300' },
      { name: 'Peace Lily', price: 21.99, image: 'https://picsum.photos/seed/lily/300/300' },
      { name: 'Spider Plant', price: 11.99, image: 'https://picsum.photos/seed/spider/300/300' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid', price: 24.99, image: 'https://picsum.photos/seed/orchid/300/300' },
      { name: 'African Violet', price: 13.99, image: 'https://picsum.photos/seed/violet/300/300' },
      { name: 'Hibiscus', price: 16.99, image: 'https://picsum.photos/seed/hibiscus/300/300' },
    ],
  },
];

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      {plantsData.map((section) => (
        <div key={section.category} className="category-section">
          <h2 className="category-title">{section.category}</h2>
          <div className="plant-grid">
            {section.plants.map((plant) => (
              <div key={plant.name} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  disabled={!!addedItems[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
