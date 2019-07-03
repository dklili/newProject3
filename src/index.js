import React from 'react';
import ReactDOM from 'react-dom';
import App from './HandApp';
import { Provider } from 'react-redux';
import store from './redux/index';


const NewApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(NewApp, document.getElementById('root'));
