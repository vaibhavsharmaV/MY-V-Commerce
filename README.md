# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







MY BASE CODE -------


app.jsx - 

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products?limit=18');
//         const data = await response.json();
//         setProducts(data); // Set products directly with the fetched data array
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (data) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === data.id);
//       if (existingItem) {
//         return prevCart.map(item => 
//           item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...data, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
//   };

//   const updateQuantity = (itemId, delta) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === itemId
//           ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
//           : item
//       )
//     );
//   };

//   return (
//     <Router>
//       <Header count={cart.reduce((total, item) => total + item.quantity, 0)} />
//       <Routes>
//         <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
//         <Route path="/cart" element={<CartList cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




Productlist.jsx - 

// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ProductList({ products, addToCart }) {
//     return (
//         <div className="container-fluid"> {/* container-fluid ensure to uses the full width */}
//             <div className="row justify-content-center">
//                 {products.map((productItem) => (
//                     <div key={productItem.id} className="col-md-3 mb-4">
//                         <div className="card h-100">
//                             <img src={productItem.image} className="card-img-top" alt={productItem.title} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{productItem.title}</h5>
//                                 <p className="card-text">{productItem.category}</p>
//                                 <p className="card-text">Rs. {productItem.price}</p>
//                                 <button className="btn btn-primary" onClick={() => addToCart(productItem)}>Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductList;




Cartlist.jsx - 

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




HEADER.CSS - 

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header({ count }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">V-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Other links go here */}
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart <span className="badge bg-secondary">{count}</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

