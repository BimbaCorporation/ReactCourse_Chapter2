import React from 'react';
import { Link } from 'react-router-dom';
const Reviews = () => {
    return (
        <div>
          <h1>Відгуки</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default Reviews;
