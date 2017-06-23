import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

import LoginPage from './components/LoginPage';
require('./style/LoginSignUpForm.css');

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <LoginPage/>
    </Provider>
    , document.querySelector('.container')
);
