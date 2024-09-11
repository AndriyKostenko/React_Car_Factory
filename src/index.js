// importing react, react-dom only here.
import React from 'react';
import ReactDOM from 'react-dom/client';

//importing main component
import App from './components/app/App';

//importing main styles
import './style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
// all other components  will be in main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


