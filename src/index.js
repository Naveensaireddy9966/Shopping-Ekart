import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';

ReactDOM.render(
  
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
 
, document.getElementById('root'));
