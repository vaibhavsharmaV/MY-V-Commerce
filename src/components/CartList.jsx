
import React, { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart, removeFromCart, updateQuantity }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="container">
      {CART.length > 0 ? (
        <div>
          {CART.map((cartItem) => (
            <div key={cartItem.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={cartItem.image} className="img-fluid rounded-start" alt={cartItem.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{cartItem.title}</h5>
                    <p className="card-text">{cartItem.category}</p>
                    <p className="card-text">Rs. {cartItem.price}</p>
                    <p className="card-text">Total: Rs. {cartItem.price * cartItem.quantity}</p>
                    <div className="input-group mb-3">
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(cartItem.id, -1)}>-</button>
                      <input type="text" className="form-control text-center" value={cartItem.quantity} readOnly />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(cartItem.id, 1)}>+</button>
                    </div>
                    <button className="btn btn-danger" onClick={() => removeFromCart(cartItem.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">
                Rs. {CART.reduce((total, item) => total + item.price * item.quantity, 0)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default CartList;

