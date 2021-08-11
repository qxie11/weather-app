import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Styles
import './styles/index.scss';

// Components
import App from './App';

ReactDOM.render(
    <Provider store={store()}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);