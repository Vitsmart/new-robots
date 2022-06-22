import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import reportWebVitals from './reportWebVitals';
import Cardlist from './Cardlist';
import { robots1 } from './robots1';
import './searchbox';
import './app1';


ReactDOM.render(
<Cardlist robots1 = { robots1 } />,

(document.getElementById('root')));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
