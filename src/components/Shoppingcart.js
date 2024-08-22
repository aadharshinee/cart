import React from 'react';
import blush from '../assets/blush.jpg';
import eyeliner from '../assets/eyeliner.jpg';
import eyeshadow from '../assets/eyeshadow.jpg';
import foundation from '../assets/foundation.jpg';
import lipstick from '../assets/lipstick.jpg';
import mascara from '../assets/mascara.jpg';
import './ShoppingCart.css';

function Shoppingcart() {
  const products = [
    { name: "Lipstick", cost: 15, image: lipstick },
    { name: "Foundation", cost: 25, image: foundation },
    { name: "Mascara", cost: 20, image: mascara },
    { name: "Blush", cost: 18, image: blush },
    { name: "Eyeliner", cost: 12, image: eyeliner },
    { name: "Eyeshadow", cost: 22, image: eyeshadow },
  ];

  return (
    <div className="shopping-cart">
      <h1>Makeup Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <span>{product.name}</span>
              <span>${product.cost}</span>
              <button className="custom-button">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoppingcart;
