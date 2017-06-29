import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

import LoginSignUpPage from './components/LoginSignUpPage';
import WorkoutList from './components/WorkoutList';
import Volume from './components/Volume';

require('./style/LoginSignUpForm.css');
require('./style/WorkoutList.css');

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Volume/>
    </Provider>
    , document.querySelector('.container')
);
