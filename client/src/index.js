import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import Globalstyle from './style/Globalstyle';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <Globalstyle />
          <App />
        </Router>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
);
