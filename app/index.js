import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {browserHistory} from 'react-router';

import App from './containers/App';

// import로 통일
require('./style/LoginSignUpForm.css');
require('./style/MainPage.css');
require('./style/SideBar.css');

/*
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
*/

const store = applyMiddleware(thunk)(createStore)(reducers);

///////////////////
// 1. 이 아래 부분이 필요 없어보임. reducer의 default state를 리턴할 때 바로 이 로직을 가지고 리턴할 수 있기 때문.
// 2. 단순히 token 존재 유무만으로 auth 여부를 판단하는것도 나쁘진 않지만, 예를 들어 유저가 임의로 token 값을 123이라 세팅하면 클라이언트쪽에서는 자신이 authenticate 돼 있다고 판단하기 때문에 서버가 invalidate 해주기 전까지는 auth 된 것처럼 페이지를 보여주게 되기 때문에 간단하게 토큰 expire 여부나, 토큰이 json web token 형식이 맞는지 등도 처음에 고려하면 좋을 듯.
const token = localStorage.getItem('token');

// 이름 자체는 authenticateUser이 좋을듯. 동사인지 명사인지 헷갈릴 수 있음.
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
//////////////////

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('.root-container')
);
