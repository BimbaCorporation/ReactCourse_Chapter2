import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
          <h1>Реєстрація</h1>
          <nav>
            <Link to="/Menu">
              <button>Назад</button>
            </Link>
          </nav>
        </div>
      );
};

export default Register;
