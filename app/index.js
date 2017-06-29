import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

import LoginSignUpPage from './components/LoginSignUpPage';

import Volume from './components/volume/VolumeContainer';
import ListContainer from './components/ListContainer';

require('./style/LoginSignUpForm.css');
require('./style/WorkoutList.css');

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <ListContainer/>
    </Provider>
    , document.querySelector('.container')
);
