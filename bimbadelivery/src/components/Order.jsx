import React from 'react';
import { Link } from 'react-router-dom';
const Order = () => {
    return (
        <div>
          <h1>Замовлення</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
            <Link to="/orders/history">
          <button>Історія замовлень</button>
        </Link>
          </nav>
        </div>
      );
};

export default Order;
