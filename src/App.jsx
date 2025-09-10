import React, { useState } from 'react';
import './App.css'
import { Routes, Route, NavLink, BrowserRouter as Router, Link } from 'react-router-dom';
import { } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import Drone from './pages/Drones';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Cart from './pages/Cart';
import Drones from './pages/Drones';

function App() {

  const [cart, setCart] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      const fixed = Array.isArray(saved)
        ? saved.map((i) => ({ ...i, quantity: i.quantity ?? 1 }))
        : [];
      localStorage.setItem("cart", JSON.stringify(fixed));
      return fixed;
    } catch {
      return [];
    }
  });

  // Ürün ekle: varsa quantity++, yoksa quantity:1 ile ekle
  const addToCart = (drone) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.name === drone.name);
      let next;
      if (idx !== -1) {
        next = prev.map((it, i) =>
          i === idx ? { ...it, quantity: (it.quantity ?? 1) + 1 } : it
        );
      } else {
        next = [...prev, { ...drone, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  // Quantity artır
  const incQty = (name) => {
    setCart((prev) => {
      const next = prev.map((it) =>
        it.name === name ? { ...it, quantity: (it.quantity ?? 1) + 1 } : it
      );
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  // Quantity azalt (0 olursa ürünü kaldır)
  const decQty = (name) => {
    setCart((prev) => {
      const next = prev
        .map((it) =>
          it.name === name
            ? { ...it, quantity: Math.max(0, (it.quantity ?? 1) - 1) }
            : it
        )
        .filter((it) => (it.quantity ?? 1) > 0);
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => {
      const next = prev.filter((item) => item.name !== name);
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // localStorage’den de temizle
  };


  return (

    <div>

      <nav>

      </nav>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/drones' element={<Drone />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />

        <Route path="/" element={<Drones cart={cart} addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              incQty={incQty}
              decQty={decQty}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />

          }
        />

        <Route
          path="/accessories"
          element={<Accessories addToCart={addToCart} />}

        />
      </Routes>

    </div >

  )
}

export default App;
