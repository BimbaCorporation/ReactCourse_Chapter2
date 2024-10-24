import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css'; 

const Menu = () => {
  return (
    <div className="header_menu_main">
      <div className="heander_backgraund">
        <div className="menu_Header">
          <h1>Меню</h1> 
          <div className="nav_container">
            <nav className='nav_header'>
              <Link to="/register">
                <button className="register-button">Реєстрація</button>
              </Link>
              <Link to="/item">
                <button>Товари</button>
              </Link>
              <Link to="/reviews">
                <button>Відгуки</button>
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
