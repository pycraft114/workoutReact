import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

import LoginSignUpPage from './components/LoginSignUpPage';
require('./style/LoginSignUpForm.css');

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <LoginSignUpPage/>
    </Provider>
    , document.querySelector('.container')
);
