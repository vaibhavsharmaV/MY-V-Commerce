
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=18');
        const data = await response.json();
        setProducts(data); // Set products directly with the fetched data array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (data) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === data.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...data, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  return (
    <Router>
      <Header count={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartList cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;
