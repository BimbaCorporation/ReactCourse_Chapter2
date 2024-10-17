// src/BasicRoute.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Імпорт компонентів
import Menu from '../components/Menu';
import Reviews from '../components/Reviews';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Cart from '../components/Cart';
import Order from '../components/Order';
import OrderHistory from '../components/OrderHistory';
import NotFound from '../components/NotFound';

const BasicRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orders/history" element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default BasicRoute;
