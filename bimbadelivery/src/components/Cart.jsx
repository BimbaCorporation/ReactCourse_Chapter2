import React from 'react';
import { Link } from 'react-router-dom';
const Cart = () => {
    return (
        <div>
          <h1>Кошик продуктів</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default Cart;
