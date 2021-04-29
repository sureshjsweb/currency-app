import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { addCurrency } from './store/currency';
import App from './components/App/App';
import './index.css';

const store = configureStore();
store.subscribe(() => {
  console.log('Store updated');
});

store.dispatch(addCurrency('USD'));
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
