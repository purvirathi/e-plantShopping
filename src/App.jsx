import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const goToProducts = () => setCurrentPage('products');
  const goToCart = () => setCurrentPage('cart');
  const goToHome = () => setCurrentPage('landing');

  if (currentPage === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <AboutUs />
          <button className="get-started-btn" onClick={goToProducts}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header
        currentPage={currentPage}
        onHomeClick={goToHome}
        onProductsClick={goToProducts}
        onCartClick={goToCart}
      />
      {currentPage === 'products' && (
        <ProductList onCartClick={goToCart} />
      )}
      {currentPage === 'cart' && (
        <CartItem onContinueShopping={goToProducts} />
      )}
    </div>
  );
}

export default App;