import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HelmetProvider } from 'react-helmet-async';

// Styles
import 'antd/dist/antd.css';
import './styles/index.scss';

// Components
import App from './App';

ReactDOM.render(
    <Provider store={store()}>
        <React.StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);