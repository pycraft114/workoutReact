import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {browserHistory} from 'react-router';

/////
import LoginSignUpPage from './containers/LoginSignUpPage';
import MainPage from './containers/MainPage';
import PrivateContainer from './PrivateContainer';
/////
require('./style/LoginSignUpForm.css');
require('./style/MainPage.css');

/*
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
*/

const store = applyMiddleware(thunk)(createStore)(reducers);
const token = localStorage.getItem('token');

if(token){
    store.dispatch({type:"USER_AUTHED"});
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history ={browserHistory}>
            <Switch>
                <Route exact path = "/" component={LoginSignUpPage}/>
                <PrivateContainer>
                    <Route exact path = "/main" component={MainPage}/>
                </PrivateContainer>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
