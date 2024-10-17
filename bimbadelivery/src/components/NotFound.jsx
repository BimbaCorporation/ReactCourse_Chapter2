import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
          <h1>Помилка</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default NotFound;
