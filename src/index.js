import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Context from './context';
import './index.css';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Success from './pages/Success';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Context>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/success" element={<Success />} />

      </Routes>
        </Context>
    </BrowserRouter>
  </React.StrictMode>
);