import React from 'react';
import BasicRoute from './routes/BasicRoute'; // Імпорт основних маршрутів
import { Link } from 'react-router-dom';
import './App.css'; // Додаємо стилі

const App = () => {
  return (
    <div className="App">
     

      <BasicRoute />
    </div>
  );
};

export default App;
