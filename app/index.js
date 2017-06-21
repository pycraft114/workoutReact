import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
require('./style/LoginForm.css');
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <LoginForm/>
    </Provider>
    , document.querySelector('.container')
);
