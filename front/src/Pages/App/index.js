import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../Login';
import { HomeGerente } from '../HomeGerente';
import { HomeFuncionario } from '../HomeFuncionario';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  const handleStatusLoginChange = (newStatusLogin) => {
    setIsAuthenticated(newStatusLogin);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated == 1 ? (
              <HomeGerente />
            ) : isAuthenticated == 2 ? (
              <HomeFuncionario />
            ) : (
               
              <Login statusLogin={handleStatusLoginChange} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;