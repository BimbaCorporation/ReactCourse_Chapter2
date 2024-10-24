import React from 'react';
import { Link } from 'react-router-dom';
const Item = () => {
    return (
        <div>
          <h1>Товари</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default Item;