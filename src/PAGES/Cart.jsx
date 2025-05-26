import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(AppContext);

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity || 1}
              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
