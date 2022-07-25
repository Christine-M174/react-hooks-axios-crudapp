import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Note(1) :: syntax react -v 6 -->> note in version 8 the syntax has changed to ReactDOM.createRoot from 'react-dom/client'
ReactDOM.render(<App />, document.getElementById('root'));