import React, { useState } from 'react';
import blushImage from '../assets/blush.jpg';
import eyelinerImage from '../assets/eyeliner.jpg';
import eyeshadowImage from '../assets/eyeshadow.jpg';
import foundationImage from '../assets/foundation.jpg';
import lipstickImage from '../assets/lipstick.jpg';
import mascaraImage from '../assets/mascara.jpg';
import './ShoppingCart.css';

function Shoppingcart() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Blush', price: 10, image: blushImage },
    { id: 2, name: 'Eyeliner', price: 15, image: eyelinerImage },
    { id: 3, name: 'Eyeshadow', price: 20, image: eyeshadowImage },
    { id: 4, name: 'Foundation', price: 25, image: foundationImage },
    { id: 5, name: 'Lipstick', price: 12, image: lipstickImage },
    { id: 6, name: 'Mascara', price: 18, image: mascaraImage },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button className="custom-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Price: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default Shoppingcart;
