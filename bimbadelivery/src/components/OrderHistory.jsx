import React from 'react';
import { Link } from 'react-router-dom';
const OrderHistory = () => {
    return (
        <div>
          <h1>Історія замовлень</h1>
          <nav>
            <Link to="/order">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default OrderHistory;
