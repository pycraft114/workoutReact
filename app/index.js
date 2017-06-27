import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

import LoginSignUpPage from './components/LoginSignUpPage';
import WorkoutList from './components/WorkoutList';
require('./style/LoginSignUpForm.css');

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <WorkoutList/>
    </Provider>
    , document.querySelector('.container')
);
