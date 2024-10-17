import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Menu = () => {
  return (
    <div>
      <h1>Меню</h1>
      <nav>
        <Link to="/reviews">
          <button>Відгуки</button>
        </Link>
        <Link to="/register">
          <button>Реєстрація</button>
        </Link>
        <Link to="/profile">
          <button>Профіль</button>
        </Link>
        <Link to="/cart">
          <button>Кошик</button>
        </Link>
        <Link to="/order">
          <button>Оформити замовлення</button>
        </Link>
        <Link to="/orders/history">
          <button>Історія замовлень</button>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
