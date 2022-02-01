import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';


// react DOM render (
// <Reactstrict.mode <app (self-closing) </strict
// doc get el by id root
// );
ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root')
);
