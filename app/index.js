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
import Gate from './containers/Gate';
/////
require('./style/LoginSignUpForm.css');
require('./style/MainPage.css');

/*
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
*/

const store = applyMiddleware(thunk)(createStore)(reducers);
const token = localStorage.getItem('token');

function authUser(){
    console.log("authenticated user");
    store.dispatch({type:"USER_AUTHED"});
}
if(token){
    authUser();
}

const states = store.getState();
const isAuthed = states.isAuthed;
console.log("is authed?",isAuthed);

function renderLoginPage(){
    return (
        <Gate bool={!isAuthed} redirUrl="/main">
            <Route exact path = "/" component={LoginSignUpPage}/>
        </Gate>
    )
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history ={browserHistory}>
            <Switch>
                <Gate path="/main" bool={isAuthed} redirUrl="/" component={MainPage}/>
                <Gate path="/" bool={!isAuthed} redirUrl="/main" component={LoginSignUpPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
