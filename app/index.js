import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';


/////
import LoginSignUpPage from './components/LoginSignUpPage';
import ListContainer from './components/ListContainer';
import GraphContainer from './components/graph/GraphContainer';
/////


require('./style/LoginSignUpForm.css');
require('./style/WorkoutList.css');

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <ListContainer/>
    </Provider>
    , document.querySelector('.container')
);
