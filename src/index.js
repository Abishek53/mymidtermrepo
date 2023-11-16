import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser'; 

ReactDOM.render(
  <React.StrictMode>
    <AddProduct />
    <SignUpUser />
  </React.StrictMode>,
  document.getElementById('root')
);
