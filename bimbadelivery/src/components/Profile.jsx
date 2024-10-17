import React from 'react';
import { Link } from 'react-router-dom';
const Profile = () => {
    return (
        <div>
          <h1>Профіль користувача</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default Profile;
