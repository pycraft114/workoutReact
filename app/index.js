import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';


/////
import LoginSignUpPage from './containers/LoginSignUpPage';
import MainPage from './containers/MainPage';
/////


require('./style/LoginSignUpForm.css');
require('./style/MainPage.css');

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <MainPage/>
    </Provider>
    , document.querySelector('.container')
);
