import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {browserHistory} from 'react-router';

/////
import App from './containers/App';

/////
require('./style/LoginSignUpForm.css');
require('./style/MainPage.css');
require('./style/SideBar.css');

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

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('.root-container')
);
